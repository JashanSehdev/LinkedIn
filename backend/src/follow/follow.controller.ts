import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { FollowService } from './follow.service.js';
import { CreateFollowDto } from './dto/create-follow.dto.js';
import { UpdateFollowDto } from './dto/update-follow.dto.js';
import { Request } from 'express';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  async create(@Body() createFollowDto: CreateFollowDto , @Req() req : Request & {user : any}) {
     return await this.followService.create(createFollowDto, req.user.id);
  }

  @Post('toggle')
  async creatOrRemove(@Body() createFollowDto: CreateFollowDto , @Req() req : Request & {user : any}) {
    return await this.followService.toggle(createFollowDto, req.user.id)
  }

  @Get()
  findAll() {
    return this.followService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followService.remove(+id);
  }
}
