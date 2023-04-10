import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpDto } from '../../dtos/sign-up.dto';
import { AuthService } from '../../services/auth/auth.service';
import { PasswordValidationPipe } from '../../pipes/password-validation/password-validation.pipe';
import { SignInDto } from '../../dtos/sign-in.dto';
import { Response } from 'express';
import { RefreshGuard } from '../../guards/refresh/refresh.guard';
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user: any;
  }
}

@Controller('api/auth')
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

  @Post('signout')
  async signOut(@Res() res: Response) {
    res.clearCookie('jid');
    res.json({ message: 'signout successfull' });
  }

  @Post('refresh')
  @UseGuards(RefreshGuard)
  async refresh(@Res() res: Response, @Req() req: Request) {
    const token = await this.authService.GetNewTokens(req.user.uuid);

    res.cookie('jid', token.refreshToken);
    res.json({ accessToken: token.accessToken });
  }
}
