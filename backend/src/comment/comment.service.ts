import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { UpdateCommentDto } from './dto/update-comment.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity.js';
import { IsNull, Repository } from 'typeorm';

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
    });
  }

  async getParentComments(postId: number){
    const parentComment = await this.commentRepository.find({
      where : {
        postId,
        parentId: IsNull()
      },
    })
    return parentComment
  }

  async getChildrenComments(commentId :number) {
    return await this.commentRepository.find({
      where : {
        parentId : commentId
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

  async remove(id: number) {
    const comment = await this.findOne(id)
    return this.commentRepository.remove(comment);
  }
}
