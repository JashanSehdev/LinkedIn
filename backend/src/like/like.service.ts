import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateLikeDto } from './dto/update-like.dto.js';
import { PostService } from '../post/post.service.js';
import { UsersService } from '../users/users.service.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity.js';

@Injectable()
export class LikeService {
  
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository : Repository<Like>,
    private readonly postService : PostService,
    private readonly userService : UsersService,
    
  ){}
  async create(postId : number, userId : number) {
    const post = await this.postService.findOne(postId);
    if (!post) throw new NotFoundException('post not found');
    const user = await this.userService.findOne(userId);
    console.log("user from likes", user)
    if (!user) throw new NotFoundException('user not found');

    const staleLike = await this.findUserLike(postId, userId)
    

    if (staleLike) {
      await this.remove(staleLike.id);
      return {message : 'like deleted'}
    }
    const like = this.likeRepository.create({
      postId : post.id,
      userId : user.id
    })

    return this.likeRepository.save(like)
  }

  findAll() {
    return `This action returns all like`;
  }

  findUserLike(postId :number, userId :number) {
    const like = this.likeRepository.findOne({
      where: {
        postId : postId,
        userId : userId
      }
    })
    return like
  }
  async findLikeById (id : number) {
    const like = this.likeRepository.findOne({where : {
      id 
    }})
    return like
  }
  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  async remove(id: number) {
    const like = await this.findLikeById(id);
    if (like) {
      return this.likeRepository.delete(like);
    }
  }
}
