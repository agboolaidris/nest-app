import { Body } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/create-auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(@Body() input: LoginAuthDto): Promise<any> {
    console.log('kkkkkkkkkkkk');
    const user = await this.authService.validateLoginInput(input);
    if (!user) {
      throw new UnauthorizedException({ msg: '' });
    }
    return user;
  }
}
