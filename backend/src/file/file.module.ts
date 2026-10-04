import { Module } from '@nestjs/common';
import { FileService } from './file.service.js';
import { FileController } from './file.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
