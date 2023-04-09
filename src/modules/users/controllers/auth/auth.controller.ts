import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Res,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpDto } from '../../dtos/sign-up.dto';
import { AuthService } from '../../services/auth/auth.service';
import { PasswordValidationPipe } from '../../pipes/password-validation/password-validation.pipe';
import { SignInDto } from '../../dtos/sign-in.dto';
import { Response } from 'express';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @UsePipes(
    new ValidationPipe({ whitelist: true }),
    new PasswordValidationPipe(),
  )
  async SignUp(@Body() signUpDto: SignUpDto) {
    return this.authService.SignUp(signUpDto);
  }

  @Post('signin')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    const token = await this.authService.SignIn(signInDto);
    res.cookie('jid', token.refreshToken, { httpOnly: true });
    res.json({ accessToken: token.accessToken });
  }

  @Post('/signout')
  async signOut(@Res() res: Response) {
    res.clearCookie('jid');
    res.json({ message: 'signout successfull' });
  }
}
