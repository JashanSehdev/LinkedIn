import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation,
} from 'typeorm';
import { User } from '../../users/entites/users.entity.js';
import { Like } from '../../like/entities/like.entity.js';
import { Comment } from '../../comment/entities/comment.entity.js';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'varchar', nullable:true })
  media: string;

  @ManyToOne(() => User, (user) => user.posts, {onDelete: 'CASCADE'})
  user: Relation<User>;

  @OneToMany(() => Like, (like) => like.post, {cascade:true})
  likes: Like[];

  @Column({type: 'integer', default:0})
  shared: number

  @Column({type : 'varchar', array:true, default: () => "'{}'" })
  hashtags: string[]

  @Column({type : 'integer', nullable : true})
  parentId : number


  @OneToMany(() => Comment, (comment) => comment.post)
  comments : Relation<Comment[]>
}
