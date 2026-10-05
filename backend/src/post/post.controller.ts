import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  Put,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service.js';
import { CreatePostDto } from './dto/create-post.dto.js';
import { UpdatePostDto } from './dto/update-post.dto.js';
import { Request } from 'express';
import { FilterDto } from './dto/filter-dto.js';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
    @Req() req: Request & { user: any },
  ) {
    return this.postService.create(createPostDto, req.user);
  }

  @Get()
  findAll(@Req() req : Request & {user : any} ) {
    return this.postService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req : Request & {user : any}) {
    return this.postService.findOneById(+id, req.user.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
