import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum NotificationType {
  CONNECTION_REQUEST = 'CONNECTION_REQUEST',
  CONNECTION_ACCEPTED = 'CONNECTION_ACCEPTED',
  POST_LIKED = 'POST_LIKED',
  POST_COMMENTED = 'POST_COMMENTED',
  FOLLOWED = 'FOLLOWED',
}

@Entity('notification')
export class Notification {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type: 'integer'})
    recipientId : number

    @Column({type: 'integer'})
    senderId : number

    @Column({
        type: 'enum',
        enum: NotificationType
    })
    type : NotificationType

    @Column({type : 'boolean', default: false})
    isRead : boolean

    @Column({type: 'integer',nullable: true})
    referenceId : number | null

    @CreateDateColumn()
    createdAt: Date

}

