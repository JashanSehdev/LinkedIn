import { Injectable, NotFoundException, Search } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto.js';
import { UpdatePostDto } from './dto/update-post.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity.js';
import { Repository } from 'typeorm';
import { User } from '../users/entites/users.entity.js';
import { Like } from '../like/entities/like.entity.js';
import { LikeService } from '../like/like.service.js';
import { FollowService } from '../follow/follow.service.js';
import { ConnectionService } from '../connection/connection.service.js';

export interface FeedPost {
  author: string;
  content: string;
  media?: string | null;
  hashtags: string[];
  createdAt: string;
  shares: number;
  comments: Comment[];
  likes: Like;
}
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly likeService: LikeService,
    private readonly followService : FollowService,
    private readonly connectionService : ConnectionService
  ) {}

  async create(createPostDto: CreatePostDto, user: User) {
    const post = this.postRepository.create({ ...createPostDto, user });
    const createdPost = {
      ...post,
      author: 'Chetan',
      hashtags: ['#Achievement'],
      createdAt: Date.now().toString(),
      shares: 3,
      content: createPostDto.content,
      media: createPostDto.media,
    };
    return this.postRepository.save(createdPost);
  }

  async findAll(userId : number) {
    const posts = await this.postRepository.find({
      relations: {
        user: true
      },
      select: {
        user: {
          id :true,
          username : true
        }
      }
    });


    return await Promise.all(
      posts.map(async (post) => {
        return {
          ...post,
          likeCount :  await this.likeService.getReactionCounts(post.id),
          isFollowing :  await this.followService.isFollowing(userId, post.user.id),
          isConnected : await this.connectionService.getConnectionStatus(userId, post.user.id),
          userLike : await this.likeService.findUserLike(post.id, userId)
        };
      }),
    );
  }

  async findOne(id: number) {
    return await this.postRepository.findOne({
      relations: {
        likes: true,
        comments: {
          childComments: true,
        },
        user: true,
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
    const post = await this.findOne(id);
    if (!post) return new NotFoundException('post not found');
    return await this.postRepository.remove(post);
  }
}
