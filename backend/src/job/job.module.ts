import { Module } from '@nestjs/common';
import { JobService } from './job.service.js';
import { JobController } from './job.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/job.entity.js';
import { AppliedJobModule } from '../applied-job/applied-job.module.js';

@Module({
  imports : [TypeOrmModule.forFeature([Job]), AppliedJobModule], 
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
