import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username, password, last): Promise<any> {
    console.log(username, password, last, 'stratagy');
    const user = await this.authService.validateLoginInput({
      username,
      password,
    });
    if (!user) {
      throw new BadRequestException();
    }
    return user;
  }
}
