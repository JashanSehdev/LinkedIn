import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { User } from "../../users/entites/users.entity.js";
import { Job } from "../../job/entities/job.entity.js";

@Entity('Company')

export class Company {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'varchar'})
    company_name : string
    
    @Column({type : 'varchar'})
    category : string

    @Column({type : 'varchar'})
    company_logo : string

    @Column({ type : 'integer'})
    userId : number

    @Column({type : 'varchar', nullable:false, default: "Unknown"})
    location: string

    @ManyToOne(() => User, (user) => user.companies, {cascade:true})
    @JoinColumn({name : 'userId'})
    user: Relation<User>

    @OneToMany(() => Job, (job) => job.company)
    jobs: Relation<Job>
}
