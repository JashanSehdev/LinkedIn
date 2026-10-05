import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto.js';
import { UpdateMessageDto } from './dto/update-message.dto.js';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatGateway } from '../chat/chat.gateway.js';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly chatGateway : ChatGateway
  ) {}

  async create(createMessageDto: CreateMessageDto, userId: number) {
    const message = this.messageRepository.create({
      ...createMessageDto,
      sender_id: userId,

    });

    console.log("Create message called")

    const result =  await this.messageRepository.save(message);
    this.chatGateway.emitNewMessage({ message: result, chatId: result.chat_id} )
    return result;
  }

  findAll() {}

  async getChatMessages(chatId: number) {
    return await this.messageRepository.find({
      where: {
        chat_id: chatId,
      },
      relations: {
        files: true,
      },

      order: {
        created_at: 'asc',
      },
    });
  }

  async findUserMessage(userId: number) {
    return await this.messageRepository.find({
      where: {
        sender_id: userId,
      },

      order: {
        created_at: 'ASC',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
