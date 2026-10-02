import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto.js';
import { UpdateFollowDto } from './dto/update-follow.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Follow } from './entities/follow.entity.js';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private readonly followRepository: Repository<Follow>,
    private readonly userService: UsersService,
  ) {}
  async create(
    createFollowDto: CreateFollowDto,
    followerId: number,
  ): Promise<{ followerId: number; followedId: number }> {
    if (!followerId)
      throw new UnauthorizedException({
        code: 'UNAUTHORIZED',
        message: 'user not authorized',
      });

    const alreadyFollowed = await this.followRepository.findOne({
      where: {
        followedId: createFollowDto.followedId,
        followerId,
      },
    });

    if (alreadyFollowed)
      throw new ConflictException({
        code: 'ALREADY_FOLLOWED',
        message: `${followerId} already followed ${createFollowDto.followedId}`,
      });
    const follow = this.followRepository.create({
      ...createFollowDto,
      followerId,
    });

    return await this.followRepository.save(follow);
  }

  async toggle(createFollowDto: CreateFollowDto, followerId: number) {
    if (!followerId)
      throw new UnauthorizedException({
        code: 'UNAUTHORIZED',
        message: 'user not authorized',
      });

    if (createFollowDto.followedId === followerId)
      throw new ConflictException({
        code: 'SAME_USERS',
        message: 'follower and followed should not be same',
      });

    const user1 = await this.userService.findOne(followerId);
    if (!user1) throw new NotFoundException('follower not found');

    const user2 = await this.userService.findOne(createFollowDto.followedId);
    if (!user2) throw new NotFoundException(`followed User not found`);

    const alreadyFollowed = await this.followRepository.findOne({
      where: {
        followedId: createFollowDto.followedId,
        followerId,
      },
    });

    if (alreadyFollowed) {
      const removedFollowed = await this.remove(alreadyFollowed.id);

      return { ...removedFollowed, removed: true };
    }
    const follow = this.followRepository.create({
      ...createFollowDto,
      followerId,
    });

    const saved = await this.followRepository.save(follow);
    return { ...saved, removed: false };
  }

  async findAll() {
    return await this.followRepository.find();
  }

  async findFollowers(id: number) {
    return await this.followRepository.findBy({ followedId: id });
  }

  async findFollowing(id: number) {
    return await this.followRepository.findBy({ followerId: id });
  }

  async findOne(id: number) {
    const follow = await this.followRepository.findOne({
      where: {
        id,
      },
    });

    return follow;
  }

  async remove(id: number) {
    const follow = await this.findOne(id);

    if (!follow)
      throw new NotFoundException({
        code: 'NOT_FOUND',
        message: 'follow not found',
      });


    const removedValue={
      ...follow,
      id : follow.id
    }
    const result = await this.followRepository.remove(follow);


    return removedValue;
  }
}
