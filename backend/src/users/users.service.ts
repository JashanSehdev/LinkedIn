import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entites/users.entity.js';
import { Entity, EntityNotFoundError, Repository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user-dtp.js';
import { NotFoundError } from 'rxjs';
import { Request } from 'express';
import { GoogleAuthDto } from './dto/google-auth.dto.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async create(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string | null }> {
    const fetchedUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (fetchedUser) throw new ConflictException('User already exist');
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    const savedUser = await this.userRepository.save(user);
    const payload = { username: savedUser.email, id: savedUser.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async login(
    loginUserDto: LoginUserDto,
  ): Promise<{ access_token: string | null }> {
    try {
      const email = loginUserDto.email;
      const fetchedUser = await this.userRepository.findOneByOrFail({ email });

      const isValid = await bcrypt.compare(
        loginUserDto.password,
        fetchedUser.password,
      );
      console.log(isValid);
      if (!isValid) throw new UnauthorizedException('User not authorized');

      const payload = { username: fetchedUser.email, id: fetchedUser.id };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async verifyMe(req: Request): Promise<{ message: string; user: any }> {
    const token = req.cookies?.access_token;

    if (!token) {
      throw new UnauthorizedException('No token found in cookies');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token);
      return  payload
    } catch (error) {
      throw new UnauthorizedException('Session expired or invalid token');
    }
  }

  async googleAuth (googleAuthDto : GoogleAuthDto) : Promise<{ access_token: string | null }> {
    const fetchedUser = await this.userRepository.findOne({
      where: {
        email: googleAuthDto.email,
      },
    });
    let payload = {}
    if (fetchedUser) {
      payload = {id : fetchedUser.id, email : fetchedUser.email}
    } else {
      const createdUser = this.userRepository.create({...googleAuthDto, password : 'Google Auth'});
      const user = await this.userRepository.save(createdUser);
      payload = {id : user.id, email : user.email}
    }
    return {
      access_token : await this.jwtService.signAsync(payload)
    }

  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where:{id}});
  }




}
