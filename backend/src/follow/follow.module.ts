import { Module } from '@nestjs/common';
import { FollowService } from './follow.service.js';
import { FollowController } from './follow.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Follow } from './entities/follow.entity.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Follow]), UsersModule],
  controllers: [FollowController],
  providers: [FollowService],
})
export class FollowModule {}
