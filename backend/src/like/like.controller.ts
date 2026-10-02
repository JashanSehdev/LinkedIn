import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe, Query } from '@nestjs/common';
import { LikeService } from './like.service.js';
import { CreateLikeDto } from './dto/create-like.dto.js';
import { UpdateLikeDto } from './dto/update-like.dto.js';
import { QueryDto } from './dto/query.dto.js';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get(":id")
  create(@Query() query : QueryDto ,@Param('id',ParseIntPipe) id : number , @Req() req : Request & {user :any}) {
    return this.likeService.create(id, req.user.id, +query.type);
  }

  @Get()
  findAll() {
    return this.likeService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.likeService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likeService.update(+id, updateLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likeService.remove(+id);
  }
}
