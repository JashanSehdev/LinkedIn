import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PostService } from './post.service.js';
import { PostController } from './post.controller.js';
import { AuthMiddleware } from './middleware/auth.middleware.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity.js';
import { LikeModule } from '../like/like.module.js';
import { ConnectionModule } from '../connection/connection.module.js';
import { FollowModule } from '../follow/follow.module.js';

@Module({
  imports : [TypeOrmModule.forFeature([Post]), LikeModule, ConnectionModule, FollowModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService]
})

export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthMiddleware)
      .exclude({ path: 'recipes', method: RequestMethod.GET })
      .forRoutes(PostController);
  }
}
