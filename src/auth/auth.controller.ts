import { LocalAuthGuard } from './local.auth.guard';
import {
  Controller,
  Post,
  Body,
  Res,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, ResDto, LoginAuthDto } from './dto/create-auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createAuthDto: CreateAuthDto,
    @Res() res: Response,
  ): Promise<ResDto> {
    try {
      const res = await this.authService.validateRegisterInput(createAuthDto);
      if (res) return { msg: 'vvv' };
    } catch (error) {
      if (error.code === '23505') {
        if (error.detail.includes('email'))
          res.status(401).json({
            email: 'email already exist',
          });
        if (error.detail.includes('username'))
          res.json({
            username: 'username already exist',
          });
      } else {
        res.status(400).json({ error });
      }
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {
    return { user: '' };
  }
}
