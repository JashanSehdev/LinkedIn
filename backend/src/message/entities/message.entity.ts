import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Chat } from "../../chat/entities/chat.entity.js";
import { File } from "../../file/entities/file.entity.js";
import { User } from "../../users/entites/users.entity.js";

@Entity('Message')
export class Message {
    
    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'integer'})
    chat_id : number

    @Column({type : 'integer'})
    sender_id : number

    @Column({type: 'varchar'})
    text : string

    @CreateDateColumn()
    created_at : Date

    @ManyToOne(() => Chat, (chat) => chat.messages)
    @JoinColumn({name : 'chat_id'})
    chat : Relation<Chat>

    @OneToMany(() => File, (file) => file.message)
    files : Relation<File>

    @ManyToOne(() => User, (user) => user.sentMessage)
    @JoinColumn({name : 'sender_id'})
    sender : Relation<User>
}
