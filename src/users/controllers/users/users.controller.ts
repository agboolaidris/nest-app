import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Body,
  Post,
} from '@nestjs/common';
import { CreateUserProfileDto } from 'src/users/dtos/create-user-profile.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Patch('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, body);
  }

  @Post(':id/profile')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProfileDto: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, createProfileDto);
  }
}
