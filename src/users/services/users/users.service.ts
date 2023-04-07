import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/database/entities/Profile.entity';
import { User } from 'src/database/entities/User.entity';
import { CreateUserProfileDto } from 'src/users/dtos/create-user-profile.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
  ) {}

  getAllUsers() {
    return this.UserRepository.find({ relations: { profile: true } });
  }

  updateUser(id: number, body: UpdateUserDto) {
    return this.UserRepository.update({ id }, { ...body });
  }

  async createUserProfile(id: number, profileDto: CreateUserProfileDto) {
    const user = await this.UserRepository.findOne({ where: { id } });
    if (!user)
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    const newProfile = this.ProfileRepository.create(profileDto);
    const profile = await this.ProfileRepository.save(newProfile);
    user.profile = profile;
    return this.UserRepository.save(user);
  }
}
