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
import { PasswordValidationPipe } from '../../pipes/password-validation/password-validation.pipe';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @UsePipes(
    new ValidationPipe({ whitelist: true }),
    new PasswordValidationPipe(),
  )
  async Signup(@Body() signUpDto: SignUpDto) {
    return this.authService.SignUp(signUpDto);
  }
}
