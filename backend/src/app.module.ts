import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module.js';
import { JwtModule } from '@nestjs/jwt';
import { PostModule } from './post/post.module.js';
import { LikeModule } from './like/like.module.js';
import { AuthMiddleware } from './middleware/auth.middleware.js';
import { CommentModule } from './comment/comment.module.js';
import { CompanyModule } from './company/company.module.js';
import { JobModule } from './job/job.module.js';
import { AppliedJobModule } from './applied-job/applied-job.module.js';
import { FollowModule } from './follow/follow.module.js';
import { ConnectionModule } from './connection/connection.module.js';
import { NotificationModule } from './notification/notification.module.js';
import { ChatModule } from './chat/chat.module.js';
import { MessageModule } from './message/message.module.js';
import { FileModule } from './file/file.module.js';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
    PostModule,
    LikeModule,
    CommentModule,
    CompanyModule,
    JobModule,
    AppliedJobModule,
    FollowModule,
    ConnectionModule,
    NotificationModule,
    ChatModule,
    MessageModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware) 
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/register', method: RequestMethod.POST },
        { path: 'auth/google', method: RequestMethod.POST }
      ) 
      .forRoutes('*'); 
  }
}
