import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthDto, LoginAuthDto } from './dto/create-auth.dto';
import UserRepository from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<UserRepository>,
    private userService: UserService,
  ) {}

  async validateRegisterInput(data: CreateAuthDto): Promise<boolean> {
    const newuser = this.userRepository.create(data);

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

  async validateLoginInput(data: LoginAuthDto): Promise<boolean> {
    const user = await this.userService.findUserByUsername(data.username);
    return false;
  }
}
