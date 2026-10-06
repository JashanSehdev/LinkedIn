import { Module } from '@nestjs/common';
import { AppliedJobService } from './applied-job.service.js';
import { AppliedJobController } from './applied-job.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppliedJob } from './entities/applied-job.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([AppliedJob])],
  controllers: [AppliedJobController],
  providers: [AppliedJobService],
  exports : [AppliedJobService]
})
export class AppliedJobModule {}
