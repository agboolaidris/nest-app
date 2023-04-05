import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers() {
    return [
      { name: 'Idris agboola', age: 10 },
      { name: 'Boluwatife Akinola', age: 20 },
    ];
  }
}
