import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import UserRepository from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private UserRepository: Repository<UserRepository>,
  ) {}

  async validateRegisterInput(data: CreateAuthDto): Promise<boolean> {
    const newuser = this.UserRepository.create(data);

    const errors = await validate(newuser);
    if (errors.length > 0) {
      const res: any = {};
      errors.forEach((err) => {
        const key = err.property;
        if (err.constraints) {
          const value = Object.entries(err.constraints)[0][1];
          res[key] = value;
        }
      });
      throw res;
    }

    return true;
  }
}
