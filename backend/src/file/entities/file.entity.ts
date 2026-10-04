import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Message } from "../../message/entities/message.entity.js";

@Entity('File')
export class File {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'integer'})
    message_id : number
    
    @Column({type : 'varchar', nullable: true})
    file_url : string

    @Column({type: 'varchar'}) 
    file_name : string
    
    @Column({type: 'varchar'}) 
    file_type : string       

    @Column({type: 'integer'})   
    file_size : number   
    
    @ManyToOne(()=> Message, (message) => message.files, { onDelete : 'CASCADE'})
    @JoinColumn({name : 'message_id'})
    message : Relation<Message>
}
