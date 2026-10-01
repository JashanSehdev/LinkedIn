import { IsNumber } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,type Relation } from "typeorm";
import { User } from "../../users/entites/users.entity.js";
import { Job } from "../../job/entities/job.entity.js";

@Entity('AppliedJob')
export class AppliedJob {
    
    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'integer'})
    userId : number

    @Column({type : 'integer'})
    jobId: number

    @ManyToOne(() => User, (user) => user.appliedJob)
    @JoinColumn({name : 'userId'})
    user : Relation<User>

    @ManyToOne(() => Job, (job) => job.appliedJob)
    @JoinColumn({name : 'jobId'})
    job : Relation<Job>
}
