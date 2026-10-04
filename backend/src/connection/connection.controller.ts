import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ConnectionService } from './connection.service.js';
import { CreateConnectionDto } from './dto/create-connection.dto.js';
import { UpdateConnectionDto } from './dto/update-connection.dto.js';

@Controller('connections')
export class ConnectionController {
  constructor(
    private readonly connectionService: ConnectionService,
  ) {}

  @Post()
  create(@Body() createConnectionDto: CreateConnectionDto, @Req() req : Request & {user : any}) {
    return this.connectionService.create(createConnectionDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.connectionService.findAll();
  }

  @Get('user')
  getConnections(@Req() req : Request & {user : any}) {
    return this.connectionService.getConnections(req.user.id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConnectionDto: UpdateConnectionDto) {
    return this.connectionService.update(+id, updateConnectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectionService.remove(+id);
  }
}
