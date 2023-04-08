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
import { SignInDto } from '../../dtos/sign-in.dto';

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

  @Post('/signin')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async Signin(@Body() signInDto: SignInDto) {
    return this.authService.SignIn(signInDto.email, signInDto.password);
  }
}
