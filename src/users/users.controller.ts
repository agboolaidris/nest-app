import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
interface UserProps {
  id: number;
  name: string;
}

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(): UserProps[] {
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserProps {
    return this.userService.getUserById(parseFloat(id));
  }

  @Post()
  createUser(@Body() body: UserDto): any {
    return body;
  }
}
