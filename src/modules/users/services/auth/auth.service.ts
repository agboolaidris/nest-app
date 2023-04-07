import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpServiceDto } from '../../dtos/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  SignUp(signUpServiceDto: SignUpServiceDto) {
    const newUser = this.UserRepository.create(signUpServiceDto);
    return newUser.save();
  }
}
