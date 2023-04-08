import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from '../../dtos/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async SignUp(signUpDto: SignUpDto) {
    try {
      const newUser = this.UserRepository.create(signUpDto);
      const res = await newUser.save();
      return res;
    } catch (error) {
      throw new BadRequestException([error?.detail || 'internal server error']);
    }
  }
}
