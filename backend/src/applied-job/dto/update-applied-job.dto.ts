import { PartialType } from '@nestjs/mapped-types';
import { CreateAppliedJobDto } from './create-applied-job.dto.js';

export class UpdateAppliedJobDto extends PartialType(CreateAppliedJobDto) {}
