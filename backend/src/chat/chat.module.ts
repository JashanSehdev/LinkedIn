import { Module } from '@nestjs/common';
import { ChatService } from './chat.service.js';
import { ChatController } from './chat.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity.js';
import { ChatGateway } from './chat.gateway.js';

@Module({
  imports:[TypeOrmModule.forFeature([Chat])],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway],
  exports:[ChatGateway]
})
export class ChatModule {}
