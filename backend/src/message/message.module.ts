import { Module } from '@nestjs/common';
import { MessageService } from './message.service.js';
import { MessageController } from './message.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity.js';
import { ChatModule } from '../chat/chat.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), ChatModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
