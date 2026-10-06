import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AppliedJobService } from './applied-job.service.js';
import { CreateAppliedJobDto } from './dto/create-applied-job.dto.js';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto.js';

@Controller('applied_job')
export class AppliedJobController {
  constructor(private readonly appliedJobService: AppliedJobService) {}

  @Post()
  create(@Body() createAppliedJobDto: CreateAppliedJobDto, @Req() req : Request & {user: any}) {
    return this.appliedJobService.create(createAppliedJobDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.appliedJobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appliedJobService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppliedJobDto: UpdateAppliedJobDto) {
    return this.appliedJobService.update(+id, updateAppliedJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appliedJobService.remove(+id);
  }
}
