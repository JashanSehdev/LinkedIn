import {
  ConflictException,
  Injectable,
  NotFoundException,
  Search,
} from '@nestjs/common';
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
import { ifError } from 'assert';
import { throwError } from 'rxjs';
import { CreateRepostDto } from './dto/create-repost.dto.js';

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
    private readonly followService: FollowService,
    private readonly connectionService: ConnectionService,
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

  async findAll(userId: number) {
    const posts = await this.postRepository.find({
      relations: {
        user: true,
      },
      select: {
        user: {
          id: true,
          username: true,
        },
      },
    });

    return await Promise.all(
      posts.map(async (post) => {
        return {
          ...post,
          likeCount: await this.likeService.getReactionCounts(post.id),
          isFollowing: await this.followService.isFollowing(
            userId,
            post.user.id,
          ),
          isConnected: await this.connectionService.getConnectionStatus(
            userId,
            post.user.id,
          ),
          userLike: await this.likeService.findUserLike(post.id, userId),
        };
      }),
    );
  }

  async findOne(id: number) {
    return await this.postRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createRepost(
    postId: number,
    createRepostDto: CreateRepostDto,
    user: User,
  ) {
    const post = await this.findOne(postId);
    if (!post)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'post not found',
      });

    const repost = await this.findRepost(post, user.id);

    if (repost)
      throw new ConflictException({
        code: 'ALREADY_EXIST',
        message: 'repost already exist',
      });

    const newRepost = this.postRepository.create({
      ...createRepostDto,
      repostOfId: postId,
      user: user,
      isRepost: true,
    });

    const savedRepost = await this.postRepository.save(newRepost);
    return this.postRepository.findOne({
      where: {
        id: savedRepost.id,
      },
      relations: {
        repostOf: {
          user: true,
        },
        user: true,
      },
      select: {
        id: true,
        content: true,
        media: true,
        shared: true,
        hashtags: true,
        parentId: true,
        isRepost: true,
        repostOfId: true,
        user : {
          id : true,
          username : true
        },
        repostOf: {
          id: true,
          content: true,
          media: true,
          shared: true,
          hashtags: true,
          parentId: true,
          isRepost: true,
          repostOfId: true,
          user: {
            id: true,
            username: true,
          },
        },
      },
    });
  }

  async findRepost(postRef: Post, userId: number) {
    return await this.postRepository.findOne({
      where: {
        repostOf: {
          id: postRef.id,
        },
        user: {
          id: userId,
        },
      },
    });
  }

  async findOneById(id: number, userId: number) {
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
      },
      select: {
        user: {
          id: true,
          username: true,
        },
      },
    });

    if (!post) {
      throw new NotFoundException('Error not found Exception');
    }

    return {
      ...post,
      likeCount: await this.likeService.getReactionCounts(post.id),
      isFollowing: await this.followService.isFollowing(userId, post.user.id),
      isConnected: await this.connectionService.getConnectionStatus(
        userId,
        post.user.id,
      ),
      userLike: await this.likeService.findUserLike(post.id, userId),
    };
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
