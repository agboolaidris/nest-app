import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('kkkkkkkkkkkk');
    const user = await this.authService.validateLoginInput({
      username,
      password,
    });
    if (!user) {
      throw new UnauthorizedException({ msg: '' });
    }
    return user;
  }
}
