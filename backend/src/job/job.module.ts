import { Module } from '@nestjs/common';
import { JobService } from './job.service.js';
import { JobController } from './job.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/job.entity.js';

@Module({
  imports : [TypeOrmModule.forFeature([Job])], 
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
