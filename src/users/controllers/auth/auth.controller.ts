import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthService } from 'src/users/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  createUser(@Body() user: CreateUserDto) {
    return this.authService.createUser({
      username: user.username,
      password: user.password,
      email: user.email,
    });
  }
}
