import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      { name: 'Idris agboola', age: 10 },
      { name: 'Boluwatife Akinola', age: 20 },
    ];
  }

  @Get('/:id')
  getUser() {
    return { name: 'Idris agboola', age: 10 };
  }
}
