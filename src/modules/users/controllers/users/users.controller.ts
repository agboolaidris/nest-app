import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { AuthGuard } from '../../guards/auth/auth.guard';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAllUsers() {
    try {
      return this.userService.FetchAllUser();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  getUser() {
    return { message: 'me' };
  }
}
