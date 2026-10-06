import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto.js';
import { UpdateChatDto } from './dto/update-chat.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  async create(createChatDto: CreateChatDto, userId: number) {
    if (!userId)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'user not found',
      });
    if (createChatDto.recipient_id === userId)
      throw new ConflictException({
        code: 'SAME_USER',
        message: 'both participants should not be same',
      });

    const existedChat = await this.findChat(createChatDto.recipient_id, userId);

    if (existedChat) return existedChat;

    const chat = this.chatRepository.create({
      user2_id: createChatDto.recipient_id,
      user1_id: userId,
    });
    return await this.chatRepository.save(chat);
  }

  async findChat(user1_id: number, user2_id: number) {
    const chat1 = await this.chatRepository.findOne({
      where: {
        user1_id,
        user2_id,
      },
    });
    if (chat1) return chat1;

    const chat2 = await this.chatRepository.findOne({
      where: {
        user1_id: user2_id,
        user2_id: user1_id,
      },
    });

    return chat2;
  }

  async findAll() {
    return await this.chatRepository.find();
  }

  async findOne(id: number) {
    return await this.chatRepository.findOneBy({ id });
  }

  async getChat(id : number, userId : number) {
    const room =  await this.chatRepository.findOne({
      where : {
        id
      },
      relations:{
        user1 : true,
        user2: true
      },
      select: {
        user1: {
          id: true,
          username: true,
        },
        user2: {
          id: true,
          username: true,
        },
    }
  })

  if (!room) throw new NotFoundException({code : 'NOT_FOUND', message : 'chat not found'})

  const otherUser = (room.user1.id === userId) 
      ? room.user2 : room.user1;

      return  {
        ...room,
        user : otherUser
      }
  }
  async update(id: number, updateChatDto: UpdateChatDto) {
    let chat = await this.findOne(id);
    if (!chat)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'chat not found',
      });
    Object.assign(chat, updateChatDto);

    await this.chatRepository.update(id, chat);

    return chat;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }

  async userRoom(id: number) {
    const rooms = await this.chatRepository.find({
      relations: {
        user1: true,
        user2: true
      },
      where: [
        {
          user1_id: id,
        },
        {
          user2_id: id,
        },
      ],

      select: {
        user1: {
          id: true,
          username: true,
        },
        user2: {
          id: true,
          username: true,
        },
      },
    });

    return rooms.map((room) => {
      const otherUser = (room.user1.id === id) 
      ? room.user2 : room.user1;

      return {
        roomId : room.id,
        user : otherUser,
        created_at : room.created_at,
        updated_at : room.updated_at
      }
    })
  }
}
