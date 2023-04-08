import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpServiceDto } from '../../dtos/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async SignUp(signUpServiceDto: SignUpServiceDto) {
    try {
      const newUser = this.UserRepository.create(signUpServiceDto);
      const res = await newUser.save();
      return res;
    } catch (error) {
      throw new BadRequestException([error?.detail || 'internal server error']);
    }
  }
}
