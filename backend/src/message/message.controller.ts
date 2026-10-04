import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe } from '@nestjs/common';
import { MessageService } from './message.service.js';
import { CreateMessageDto } from './dto/create-message.dto.js';
import { UpdateMessageDto } from './dto/update-message.dto.js';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto, @Req() req : Request & {user : any}) {
    return this.messageService.create(createMessageDto, req.user.id);
  }

  @Get('user')
  findUserMessage( @Req() req : Request & {user : any}) {
    return this.messageService.findUserMessage(req. user.id);
  }

  @Get('chat/:id')
  findChatMessage(@Param('id', ParseIntPipe) chatId : number){
    return this.messageService.getChatMessages(chatId)
  }
  
  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}
