import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { Message } from "../../message/entities/message.entity.js";
import { User } from "../../users/entites/users.entity.js";

@Entity('Chat')
export class Chat {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'integer'})
    user1_id : number

    @Column({type : 'integer'})
    user2_id : number

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

    @OneToMany(() => Message, (message) => message.chat)
    messages : Relation<Message[]>

    @ManyToOne(() => User, (user) => user.sentChat)
    @JoinColumn({name : 'user1_id'})
    user1 : Relation<User>

    @ManyToOne(() => User, (user) => user.receivedChat)
    @JoinColumn({name : 'user2_id'})
    user2 : Relation<User>

}
