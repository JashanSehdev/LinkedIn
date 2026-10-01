import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation,
} from 'typeorm';
import { Company } from '../../company/entities/company.entity.js';
import { AppliedJob } from '../../applied-job/entities/applied-job.entity.js';

@Entity('job')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  companyId: number;

  @Column({ type: 'jsonb' })
  job_description: Record<string, any>;

  @ManyToOne(() => Company, (company) => company.jobs, { onDelete: 'CASCADE' })
  company: Relation<Company>;

  @OneToMany(() => AppliedJob, (appliedJob) => appliedJob.user)
  appliedJob: Relation<AppliedJob>[];
}
