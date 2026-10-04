import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  type Relation,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity.js';
import { Like } from '../../like/entities/like.entity.js';
import { Comment } from '../../comment/entities/comment.entity.js';
import { Company } from '../../company/entities/company.entity.js';
import { AppliedJob } from '../../applied-job/entities/applied-job.entity.js';
import { Follow } from '../../follow/entities/follow.entity.js';
import { Connection } from '../../connection/entities/connection.entity.js';
import { Chat } from '../../chat/entities/chat.entity.js';
import { Message } from '../../message/entities/message.entity.js';

@Entity({ name: 'user' })
export class User {
  // basic Information -----
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'timestamp', default: () => 'Current_Timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'Current_Timestamp' })
  updatedAt: Date;

  // user's post -------------------------

  @OneToMany(() => Post, (post) => post.user, { cascade: true })
  posts: Post[];

  //user's likes -------------------------------
  @OneToMany(() => Like, (like) => like.user, { cascade: true })
  likes: Like[];

  // user's comments ---------------------
  @OneToMany(() => Comment, (comment) => comment.user, { cascade: true })
  comments: Relation<Comment[]>;

  // user generated Companiies -------------------------------
  @OneToMany(() => Company, (company) => company.user, { cascade: true })
  companies: Relation<Company[]>;

  // user's applied Job ---------------------------

  @OneToMany(() => AppliedJob, (appliedJob) => appliedJob.user, {
    cascade: true,
  })
  appliedJob: Relation<AppliedJob>[];

  // user's followings -------------------------
  @OneToMany(() => Follow, (follow) => follow.follower)
  followings: Relation<Follow[]>;

  // user;s followers -------------------------------
  @OneToMany(() => Follow, (follow) => follow.following)
  followers: Relation<Follow[]>;

  // user's  connections ----------------------------------
  @OneToMany(() => Connection, (connection) => connection.sender)
  sentConnections: Relation<Connection[]>;

  @OneToMany(() => Connection, (connection) => connection.receiver)
  receivedConnections: Relation<Connection[]>;

  //user's chatconnection ---------------------------------------
  @OneToMany(() => Chat, (chat) => chat.user1)
  sentChat : Relation<Chat[]>

  @OneToMany(() => Chat, (chat) => chat.user2)
  receivedChat : Relation<Chat[]>

  //user's messages--------------------------------
  @OneToMany(() => Message, (message) => message.sender)
  sentMessage : Relation<Message[]>
}
