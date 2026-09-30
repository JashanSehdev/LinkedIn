import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  type Relation,
} from 'typeorm';
import { User } from '../../users/entites/users.entity.js';
import { Like } from '../../like/entities/like.entity.js';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'varchar', nullable:true })
  media: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: Relation<User>;

  @OneToMany(() => Like, (like) => like.post)
  likes: Like[];

  @Column({type: 'varchar', default:'Unknown'})
  author: string

  @Column({type: 'integer', default:0})
  shared: number

  @Column({type : 'varchar', array:true, default: () => "'{}'" })
  hashtags: string[]
}
