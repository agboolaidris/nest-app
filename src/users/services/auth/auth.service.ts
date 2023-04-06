import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/User.entity';
import { CreateUserServiceDto } from 'src/users/dtos/create-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  createUser(user: CreateUserServiceDto) {
    const newUser = this.UserRepository.create(user);
    return this.UserRepository.save(newUser);
  }
}
