import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entites/users.entity.js';

export enum ConnectionStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

@Entity('Connection')
export class Connection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  receiverId: number;

  @Column({ type: 'integer' })
  senderId: number;

  @Column({
    type: 'enum',
    enum: ConnectionStatus,
    default: ConnectionStatus.PENDING,
  })
  status: ConnectionStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.sentConnections)
  @JoinColumn({ name: 'senderId' })
  sender: Relation<User>;

  @ManyToOne(() => User, (user) => user.receivedConnections)
  @JoinColumn({ name: 'receiverId' })
  receiver: Relation<User>;
}
