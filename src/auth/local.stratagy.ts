import { Body } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate({ username, password }): Promise<any> {
    console.log('kkkkkkkkkkkk');
    const user = await this.authService.validateLoginInput({
      username,
      password,
    });
    if (!user) {
      throw new BadRequestException({ msg: 'bas' });
    }
    return user;
  }
}
