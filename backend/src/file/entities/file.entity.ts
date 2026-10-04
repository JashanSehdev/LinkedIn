import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Message } from "../../message/entities/message.entity.js";

@Entity('File')
export class File {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'integer'})
    message_id : number

    @Column({type: 'varchar'}) 
    file_name : string
    
    @Column({type: 'varchar'}) 
    file_type : string       

    @Column({type: 'integer'})   
    file_sizd : number   
    
    @ManyToOne(()=> Message, (message) => message.files)
    @JoinColumn({name : 'message_id'})
    message : Relation<Message>
}
