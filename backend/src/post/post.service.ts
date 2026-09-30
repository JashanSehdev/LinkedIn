import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto.js';
import { UpdatePostDto } from './dto/update-post.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity.js';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { User } from '../users/entites/users.entity.js';
import { Like } from '../like/entities/like.entity.js';


export interface FeedPost {
  author: string;
  content: string;
  media?: string | null;
  hashtags: string[];
  createdAt: string;
  shares: number;
  comments: Comment[];
  likes: Like
}
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, user: User) {
    const post = this.postRepository.create({ ...createPostDto, user });
    const createdPost = {
      ...post,
      author: 'Chetan',
      hashtags: ['#Achievement'],
      createdAt:Date.now().toString(),
      shares: 3,
      content: createPostDto.content,
      media : createPostDto.media,

    }
    return this.postRepository.save(createdPost);
  }

  async findAll() {
    return await this.postRepository.find( {
      relations: {
        likes :true
      }
    });
  }

  async findOne(id: number) {
    return await this.postRepository.findOne({
      relations:{
        likes:true,
      },
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    if (!post) return new NotFoundException('post not found');

    Object.assign(post, updatePostDto);

     return await this.postRepository.save(post);
  }

  async remove(id: number) {
    const post = await  this.findOne(id)
    if (!post) return new NotFoundException('post not found');
    return await this.postRepository.remove(post)
  }
}
