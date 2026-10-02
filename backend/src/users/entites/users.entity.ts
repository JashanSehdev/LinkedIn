import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany,type Relation, ManyToOne } from 'typeorm';
import { Post } from '../../post/entities/post.entity.js';
import { Like } from '../../like/entities/like.entity.js';
import { Comment } from '../../comment/entities/comment.entity.js';
import { Company } from '../../company/entities/company.entity.js';
import { AppliedJob } from '../../applied-job/entities/applied-job.entity.js';
import { Follow } from '../../follow/entities/follow.entity.js';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar', unique: true, nullable: false })
  email: string;

  @Column({type:'varchar', nullable: false })
  password: string;

  @Column({type: 'varchar'})
  username : string

  @Column({type: "timestamp", default: () => 'Current_Timestamp'})
  createdAt: Date

  @Column({type: "timestamp", default: () => 'Current_Timestamp'})
  updatedAt: Date

  @OneToMany(() => Post, (post) => post.user, {cascade: true})
  posts: Post[]

  @OneToMany(() => Like, (like) => like.user, {cascade: true})
  likes: Like[]

  @OneToMany(() => Comment, (comment) => comment.userId, {cascade: true})
  comments : Relation<Comment[]>

  @OneToMany(() => Company, (company)=>company.user, {cascade: true})
  companies : Relation<Company[]>

  @OneToMany(() => AppliedJob, (appliedJob) => appliedJob.user, {cascade: true})
  appliedJob : Relation<AppliedJob>[]

  @OneToMany(() => Follow, (follow) => follow.follower)
  followings : Relation<Follow[]>

  @OneToMany(() => Follow, (follow) => follow.following)
  followers :Relation<Follow[]>

}