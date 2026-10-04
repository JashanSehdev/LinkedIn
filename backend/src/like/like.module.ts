import { Module } from '@nestjs/common';
import { LikeService } from './like.service.js';
import { LikeController } from './like.controller.js';
import { UsersModule } from '../users/users.module.js';
import { PostModule } from '../post/post.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity.js';


@Module({
  imports : [TypeOrmModule.forFeature([Like]), UsersModule ],
  controllers: [LikeController],
  providers: [LikeService],
  exports: [LikeService]
})
export class LikeModule {}
