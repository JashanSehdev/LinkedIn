import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,type Relation, Unique } from "typeorm"
import { User } from "../../users/entites/users.entity.js"

@Entity('Follow')
@Unique(['followedId', 'followerId'])
export class Follow {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    followerId : number

    @Column()
    followedId : number
    
    @ManyToOne(() => User, (user)=> user.followings, {onDelete: 'CASCADE'})
    @JoinColumn({name : 'followerId'})
    follower : Relation<User>

    @ManyToOne(() => User, (user)=> user.followers)
    @JoinColumn({name : 'followedId'})
    following: Relation<User>


}
