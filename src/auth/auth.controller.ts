import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login() {
    console.log(process.env.DATABASE_URL);
    return this.authService.login();
  }

  @Post('/signup')
  signup() {
    return this.authService.signup();
  }
}
