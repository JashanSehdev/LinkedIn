import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto.js';
import { UpdateJobDto } from './dto/update-job.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './entities/job.entity.js';
import { AppliedJobService } from '../applied-job/applied-job.service.js';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository : Repository<Job>,
    private readonly appliedJobService :AppliedJobService
  ){}
  async create(createJobDto: CreateJobDto) {
    const job = this.jobRepository.create(createJobDto)
    return this.jobRepository.save(job)
  }

  async findAll() {
    return await this.jobRepository.find({
      relations : {
        company: true
      }
    })
  }

  async findUserJob(jobId : number, userId : number ) {
    const job = await this.jobRepository.findOne({
      where : {
        id : jobId
      },
      relations:{
        company : true
      }
    })

    const existingAppliedJob = await this.appliedJobService.getAppliedRequest(jobId, userId)
    const isApplied  = existingAppliedJob?.id 

    return  {
      ...job ,
      isApplied
    }
  }

  async findOne(id: number) {
    return await this.jobRepository.findOne({
      where: {
        id
      },
      relations : {
        company: true
      }
    });
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    let job = await this.findOne(id);
    if (!job)throw new NotFoundException({
      code : 'NOT_FOUND',
      message : 'job not found'
    })
    job = {...updateJobDto, ...job}
    return  await this.jobRepository.update(id, job)
  }

  async remove(id: number) {
    const job = await this.findOne(id)
    if (!job)throw new NotFoundException({
      code : 'NOT_FOUND',
      message : 'job not found'
    })
    return this.jobRepository.remove(job)
  }
}
