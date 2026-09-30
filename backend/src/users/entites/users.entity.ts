import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany,type Relation } from 'typeorm';
import { Post } from '../../post/entities/post.entity.js';
import { Like } from '../../like/entities/like.entity.js';
import { Comment } from '../../comment/entities/comment.entity.js';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar', unique: true, nullable: false })
  email: string;

  @Column({type:'varchar', nullable: false })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]

  @OneToMany(() => Like, (like) => like)
  likes: Like[]

  @OneToMany(() => Comment, (comment) => comment.userId)
  comments : Relation<Comment>
}