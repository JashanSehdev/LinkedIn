import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Follow } from './entities/follow.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private readonly followRepository: Repository<Follow>,
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
    if (!id) throw new UnauthorizedException('User not found')
      console.log("recieved user id",id)
    return await this.followRepository.findBy({ followedId: id });
  }


  async isFollowing(followerId : number, followedId : number) {
    const follow = await this.followRepository.findOneBy({
      followedId,
      followerId
    })

    return !!follow
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
    await this.followRepository.remove(follow);


    return removedValue;
  }
}
