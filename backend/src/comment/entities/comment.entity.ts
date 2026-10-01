import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn,type Relation } from "typeorm";
import { User } from "../../users/entites/users.entity.js";
import { Post } from "../../post/entities/post.entity.js";

@Entity('comment')
export class Comment {
    @PrimaryGeneratedColumn()
    id : number

    @Column({type: 'varchar'})
    text: string

    @Column({type: 'integer', nullable : true})
    parentId : number

    @Column({type : 'integer'})
    userId : number

    @Column({type : 'integer'})
    postId : number

    @OneToMany(() => Comment , (comment) => comment.parentComment, { cascade: true })
    childComments : Comment[]

    @ManyToOne(() => Comment, (comment) => comment.childComments, { onDelete: 'CASCADE' })
    @JoinColumn({name : 'parentId', referencedColumnName : 'id'})
    parentComment : Comment

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn({name : 'userId', referencedColumnName : 'id'})
    user : Relation<User>

    @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({name : 'postId', referencedColumnName : 'id'})
    post : Relation<Post>
}
