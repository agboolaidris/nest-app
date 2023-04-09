import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseInterceptors,
  Session,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';

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
  getUser(@Session() session: Record<string, any>) {
    session.visits = session.visits ? session.visits + 1 : 1;
    return { message: 'me', session: session.visits };
  }
}
