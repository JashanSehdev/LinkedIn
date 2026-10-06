import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAppliedJobDto } from './dto/create-applied-job.dto.js';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { AppliedJob } from './entities/applied-job.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class AppliedJobService {
  constructor(
    @InjectRepository(AppliedJob)
    private readonly appliedJobRepository : Repository<AppliedJob>
  ){}
  async create(createAppliedJobDto: CreateAppliedJobDto, userId : number) {
     const existingAppliedRequest = await this.getAppliedRequest(createAppliedJobDto.jobId, userId);

     if (existingAppliedRequest) throw new ConflictException({code : 'ALREADY_EXIST', message : 'job applied request already exist'  })
     const appliedJob = this.appliedJobRepository.create({...createAppliedJobDto, userId});

     return await this.appliedJobRepository.save(appliedJob)

  }

  async getAppliedRequest (jobId : number, userId : number) {
    return await this.appliedJobRepository.findOne({
      where: {
        jobId,
        userId
      }
    })
  }

  async findAll() {
    return await this.appliedJobRepository.find()
  }

  async findOne(id: number) {
    return await this.appliedJobRepository.findOneByOrFail({id});
  }

  async update(id: number, updateAppliedJobDto: UpdateAppliedJobDto) {
    let appliedJob = await this.findOne(id)
    appliedJob = {...appliedJob, ...updateAppliedJobDto}
    return await this.appliedJobRepository.update(id, appliedJob)
  }

  async remove(id: number) {
    const appliedJob = await this.findOne(id)
    return  await this.appliedJobRepository.delete(appliedJob)
  }
}
