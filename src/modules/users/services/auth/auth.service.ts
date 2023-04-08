import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from '../../dtos/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async SignUp(signUpDto: SignUpDto) {
    try {
      const newUser = this.UserRepository.create(signUpDto);
      const res = await this.UserRepository.save(newUser);
      return res;
    } catch (error) {
      throw new BadRequestException([error?.detail || 'internal server error']);
    }
  }

  async SignIn(email: string, password: string) {
    const user = await this.UserRepository.findOne({ where: { email } });
    if (!user)
      throw new UnauthorizedException(['email or password is invalid']);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      throw new UnauthorizedException(['email or password is invalid']);

    return user;
  }
}
