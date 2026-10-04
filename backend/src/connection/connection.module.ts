import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service.js';
import { ConnectionController } from './connection.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from './entities/connection.entity.js';
import { NotificationModule } from '../notification/notification.module.js';

@Module({
  imports:[TypeOrmModule.forFeature([Connection]), NotificationModule],
  controllers: [ConnectionController],
  providers: [ConnectionService],
  exports: [ConnectionService]
})
export class ConnectionModule {}
