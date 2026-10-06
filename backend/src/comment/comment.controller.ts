import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe } from '@nestjs/common';
import { CommentService } from './comment.service.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { UpdateCommentDto } from './dto/update-comment.dto.js';
import { Request } from 'express';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @Req() request : Request & {user: any }) {
    return this.commentService.create(createCommentDto, request.user.id);
  }
  @Post(':id')
  createReply(@Param('id', ParseIntPipe) parentId : number, @Body() createCommentDto: CreateCommentDto ,  @Req() request : Request & {user: any }) {
    return this.commentService.createReply(parentId, request.user.id, createCommentDto)
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Get('post/:id')
  findPostComments(@Param('id', ParseIntPipe) postId : number ) {
    return this.commentService.getParentComments(postId)
  }

  @Get(`/child/:id`)
  getChildrenComment(@Param('id') childComment : number ) {
    return this.commentService.getChildrenComments(childComment)
  }

  //this route will return only children
  @Get('child/:id')
  findChildren(@Param('id') id : string) {
    return this.commentService
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
