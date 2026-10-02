import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  Req,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

import type  {   Request,  Response } from 'express';
import { LoginUserDto } from './dto/login-user-dtp.js';
import { GoogleAuthDto } from './dto/google-auth.dto.js';
import { QueryDto } from './dto/query.dto.js';


@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async createUser(@Body() createUserDto: CreateUserDto, @Res({passthrough: true}) response : Response) {
    console.log('request hit')
    const token_data = await this.usersService.create(createUserDto);
    response.cookie('access_token', token_data.access_token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    return { message: 'Authentication successful' };
  }
  
  @Post('login')
  async loginUser(@Body() loginUserDto : LoginUserDto, @Res({passthrough: true}) response : Response) {
    const token_data = await this.usersService.login(loginUserDto);
    response.cookie('access_token', token_data.access_token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    return { message: 'Authentication successful' };
  }

  @Post('google')
  async googleAuth(@Body() googleAuthDto : GoogleAuthDto, @Res({passthrough: true}) response : Response) {
    const token_data = await this.usersService.googleAuth(googleAuthDto)
    response.cookie('access_token', token_data.access_token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    return "Authentication Successful"
  }

  @Get('me')
  async getMe (@Req() req : Request){
    const user = await this.usersService.verifyMe(req);
    
    return user;
  }

  @Get("logout")
  async logout (@Res({passthrough: true}) res : Response) {
      res.clearCookie('access_token');

      return ({message: "User successfully logout"})
  }

  @Get("users")
  async getAllByName (@Query() query : QueryDto) {
    return this.usersService.findAllByName(query)
  }

  @Get('users/:id')
  async getUser(@Param('id') id : number){
    return await this.usersService.findOne(+id)
  }
}
