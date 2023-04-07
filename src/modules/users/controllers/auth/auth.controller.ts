import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpDto } from '../../dtos/sign-up.dto';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  Signup(@Body() signUpDto: SignUpDto) {
    return this.authService.SignUp(signUpDto);
  }
}
