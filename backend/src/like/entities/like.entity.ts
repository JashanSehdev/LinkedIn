import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,type Relation } from 'typeorm';
import { User } from '../../users/entites/users.entity.js';
import { Post } from '../../post/entities/post.entity.js';
import { join } from 'path';

@Entity('like')
export class Like {

  @PrimaryGeneratedColumn()
  id : number

  @ManyToOne(() => User, (user) => user.likes, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;

  @Column({type : 'integer'})
  userId: number;

  @Column({type: 'integer'})
  postId: number;

  @Column({type : 'integer'})
  type: number

  @ManyToOne(() => Post, (post) => post.likes, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'postId' })
  post: Relation<Post>;
}
