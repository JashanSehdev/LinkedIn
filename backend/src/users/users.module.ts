import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entites/users.entity.js';
import { JwtModule } from '@nestjs/jwt';
import { Connection } from '../connection/entities/connection.entity.js';
import { Follow } from '../follow/entities/follow.entity.js';
import { FollowModule } from '../follow/follow.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([User, Follow, Connection]),FollowModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
