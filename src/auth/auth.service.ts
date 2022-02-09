import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import UserRepository from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private UserRepository: Repository<UserRepository>,
  ) {}
  async validateRegisterInput(data: CreateAuthDto): Promise<string> {
    const user = this.UserRepository.create(data);

    const errors = await validate(user);
    if (errors.length > 0) {
      // const err = {};
      // errors.forEach((err) => {
      //   const key = err.property;

      //   if (err.constraints) {
      //     const value = Object.entries(err.constraints)[0][1];
      //     err[key] = value;
      //   }
      // });

      return 'validate err';
    }

    return 'validate suc';
  }
}
