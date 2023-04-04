import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      { name: 'Idris agboola', age: 10 },
      { name: 'Boluwatife Akinola', age: 20 },
    ];
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return { name: 'Idris agboola', age: 10, id: id };
  }

  // @Get(':id')
  // getUser(@Param('id') id: string) {
  //   return { name: 'Idris agboola', age: 10, id: id };
  // }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return { message: 'User created', user: userData };
  }
}
