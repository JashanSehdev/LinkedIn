import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe } from '@nestjs/common';
import { ChatService } from './chat.service.js';
import { CreateChatDto } from './dto/create-chat.dto.js';
import { UpdateChatDto } from './dto/update-chat.dto.js';
import { Request } from 'express';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto, @Req() req : Request & {user : any}) {
    return this.chatService.create(createChatDto, req.user.id);
  }
  
  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get('user')
  getRooms(@Req() req : Request & {user : any}){
    return this.chatService.userRoom(req.user.id)
  }

  @Get('user/:id')
  getRoom(@Param('id', ParseIntPipe) chatId : number ,@Req() req : Request & {user : any}){
    return this.chatService.getChat(chatId, req.user.id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(+id, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
