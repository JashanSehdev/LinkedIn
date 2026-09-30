import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { UpdateCommentDto } from './dto/update-comment.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}
  async create(createCommentDto: CreateCommentDto, userId: number) {
    const createComment = {
      userId,
      text: createCommentDto.text,
      postId: createCommentDto.postId,
    };

    return await this.commentRepository.save(createComment);
  }

  async createReply(
    parentId: number,
    userId: number,
    createCommentDto: CreateCommentDto,
  ) {
    const createComment = {
      userId,
      text: createCommentDto.text,
      postId: createCommentDto.postId,
      parentId,
    };
    return await this.commentRepository.save(createComment);
  }

  async findAll() {
    return await this.commentRepository.find({
      relations: {
        childComments: true,
      },
    });
  }

  async getParentComments(postId: number){
    return await this.commentRepository.find({
      // where: {
      //   postId,
      //   parentId
      // },
      relations :{
        childComments: true
      }
    })
  }

  async findOne(id: number) {
    return await this.commentRepository.find({
      where: {
        id,
      },
      relations: {
        childComments: true,
      },
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.findOne(id);

    if (!comment) return new NotFoundException('Comment not found');
    return this.commentRepository.update(id, updateCommentDto);
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
}
