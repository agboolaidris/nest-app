import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, ResDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createAuthDto: CreateAuthDto): Promise<ResDto> {
    try {
      const res = await this.authService.validateRegisterInput(createAuthDto);
      return { msg: res };
    } catch (error) {
      return {
        msg: error.message,
      };
    }
  }
}
