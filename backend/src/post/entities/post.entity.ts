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

  @Column({ type: 'varchar', nullable: true })
  content: string | null;

  @Column({ type: 'varchar', nullable: true })
  media: string;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  user: Relation<User>;

  @OneToMany(() => Like, (like) => like.post, { cascade: true })
  likes: Like[];

  @Column({ type: 'integer', default: 0 })
  shared: number;

  @Column({ type: 'varchar', array: true, default: () => "'{}'" })
  hashtags: string[];

  @Column({ type: 'integer', nullable: true })
  parentId: number;

  @Column({ type: 'boolean', default: false })
  isRepost: boolean;

  @Column({ type: 'integer', nullable: true })
  repostOfId: number | null;

  @ManyToOne(() => Post, (post) => post.reposts, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  repostOf: Relation<Post> | null;

  @OneToMany(() => Post, (post) => post.repostOf)
  reposts: Relation<Post[]>;

  @OneToMany(() => Comment, (comment) => comment.post, {cascade :true})
  comments: Relation<Comment[]>;
}
