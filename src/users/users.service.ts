import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }
  getUserById(userId: number): Promise<User> {
    return this.userRepository.findOne({ id: userId });
  }

  createUser(user) {
    // const newUser = new this.userRepository(user);
    // newUser.save();
  }
}
