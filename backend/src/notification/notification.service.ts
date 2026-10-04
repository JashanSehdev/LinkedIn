import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto.js';
import { UpdateNotificationDto } from './dto/update-notification.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity.js';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service.js';


@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    private readonly userServices: UsersService,
  ) {}
  async create(createNotificationDto: CreateNotificationDto, senderId: number) {
    const notification = this.notificationRepository.create({
      ...createNotificationDto,
      senderId,
    });

    return await this.notificationRepository.save(notification);
  }

  findAll() {
    return `This action returns all notification`;
  }

  async findUserNotification(id: number) {
    const notification = await this.notificationRepository.find({
      where: {
        recipientId: id,
      },
    });

    const notificationData = await Promise.all(
      notification.map(async (item) => {
        const sender = await this.userServices.findOne(item.senderId);
        return { ...item, sender : sender?.username };
      }),
    );

    return notificationData;
  }

  async findOne(id: number) {
    return await this.notificationRepository.findOneBy({ id });
  }

  async findWithReferenceId (referenceId : number) {
    return await this.notificationRepository.findOneBy({referenceId})
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  async remove(id: number) {
    const notification = await this.findOne(id);
    if (!notification)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'Notification not found',
      });

    const dispatchNotification = notification;
    await this.notificationRepository.remove(notification);
    return dispatchNotification;
  }
}
