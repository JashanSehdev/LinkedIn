import {
  ConflictException,
  Injectable,
  NotFoundException,
  Req,
} from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto.js';
import { UpdateConnectionDto } from './dto/update-connection.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, ConnectionStatus } from './entities/connection.entity.js';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service.js';
import { NotificationService } from '../notification/notification.service.js';
import { NotificationType } from '../notification/entities/notification.entity.js';
import { NotificationGateway } from '../notification/notification.gateway.js';

@Injectable()
export class ConnectionService {
  constructor(
    @InjectRepository(Connection)
    private readonly connectionRepository: Repository<Connection>,
    private readonly notificationService: NotificationService,
    private readonly notificationGateway: NotificationGateway,
  ) {}
  async create(createConnectionDto: CreateConnectionDto, userId: number) {
    const isValid = await this.verify(createConnectionDto.receiverId, userId);
    console.log('isValid?', isValid);
    if (!isValid)
      throw new ConflictException({
        code: 'ALREADY_EXIST',
        message: 'connection already exist',
      });

    const connection = await this.connectionRepository.save({
      senderId: userId,
      receiverId: createConnectionDto.receiverId,
      status: ConnectionStatus.PENDING,
    });

    const notification = await this.notificationService.create(
      {
        recipientId: createConnectionDto.receiverId,
        type: NotificationType.CONNECTION_REQUEST,
        referenceId: connection.id,
      },
      userId,
    );

    this.notificationGateway.sendNotification(
      createConnectionDto.receiverId,
      notification,
    );

    return connection;
  }

  async findAll() {
    return await this.connectionRepository.find();
  }

  async findOne(id: number) {
    return await this.connectionRepository.findOneBy({ id });
  }

  async findBySenderId(senderId: number) {
    return await this.connectionRepository.findBy({ senderId });
  }

  async findByReceiverId(receiverId: number) {
    return await this.connectionRepository.findBy({ receiverId });
  }

  async verify(senderId: number, receiverId: number) {
    if (senderId === receiverId)
      throw new ConflictException({
        code: 'SAME_USER',
        message: 'recienver and user should not be same',
      });

    const connection1 = await this.connectionRepository.findOneBy({
      senderId,
      receiverId,
    });

    if (connection1) return false;

    const connection2 = await this.connectionRepository.findOne({
      where: {
        senderId: receiverId,
        receiverId: senderId,
      },
    });

    if (connection2) return false;

    return true;
  }

  async update(id: number, updateConnectionDto: UpdateConnectionDto) {
    let connection = await this.findOne(id);
    if (!connection)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'connection not found',
      });
    connection = { ...connection, ...updateConnectionDto };

    await this.connectionRepository.update(id, connection);

    if (connection.status === ConnectionStatus.ACCEPTED) {
      const notification = await this.notificationService.findWithReferenceId(
        connection.id,
      );
      console.log(notification);
      if (!notification) return;

      await this.notificationService.remove(notification.id);
    }
    return connection;
  }

  remove(id: number) {
    return `This action removes a #${id} connection`;
  }

  async getConnectionStatus(userId: number, targetUserId: number) {
    const connection = await this.connectionRepository.findOne({
      where: [
        {
          senderId: userId,
          receiverId: targetUserId,
          status: ConnectionStatus.ACCEPTED,
        },
        {
          senderId: targetUserId,
          receiverId: userId,
          status: ConnectionStatus.ACCEPTED,
        },
      ],
    });

    return !!connection;
  }

  async getConnections(userId: number) {
    const connections = await this.connectionRepository.find({
      where: [
        {
          receiverId: userId,
          status: ConnectionStatus.ACCEPTED,
        },
        {
          senderId: userId,
          status: ConnectionStatus.ACCEPTED,
        },
      ],
      relations: {
        sender: true,
        receiver: true,
      },

      select : {
        receiver: {
          id : true,
          username : true
        },
        sender: {
          id : true,
          username:true
        }
      }
    });

    return connections.map((connection) => {
        const otherConnection = 
        connection.senderId === userId 
        ? connection.receiver 
        : connection.sender

        return ({
          connectionId : connection.id,
          user: otherConnection
        })
    })
  }
}
