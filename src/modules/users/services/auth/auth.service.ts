import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from '../../dtos/sign-up.dto';
import { SignInDto } from '../../dtos/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  private GenerateAccessToken(user: User) {
    return this.jwtService.signAsync({ uuid: user.uuid }, { secret: 'ggggg' });
  }

  private GenerateRefreshToken(user: User) {
    return this.jwtService.signAsync({ uuid: user.uuid }, { secret: 'kkkkk' });
  }

  async SignUp(signUpDto: SignUpDto) {
    try {
      const newUser = this.UserRepository.create(signUpDto);
      const res = await this.UserRepository.save(newUser);
      return res;
    } catch (error) {
      throw new BadRequestException([error?.detail || 'internal server error']);
    }
  }

  async SignIn({ email, password }: SignInDto) {
    const user = await this.UserRepository.findOne({ where: { email } });

    if (!user)
      throw new UnauthorizedException(['email or password is invalid']);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      throw new UnauthorizedException(['email or password is invalid']);

    return {
      accessToken: await this.GenerateAccessToken(user),
      refreshToken: await this.GenerateRefreshToken(user),
    };
  }

  async GetNewTokens(userId: string) {
    const user = await this.UserRepository.findOne({ where: { uuid: userId } });
    if (!user) throw new UnauthorizedException(['Invalid Token']);

    return {
      accessToken: await this.GenerateAccessToken(user),
      refreshToken: await this.GenerateRefreshToken(user),
    };
  }
}
