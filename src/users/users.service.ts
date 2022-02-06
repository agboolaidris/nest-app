import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [{ id: 1, name: 'idris' }];
  getAllUser() {
    return this.users;
  }
  getUserById(userId: number) {
    return this.users.find((user) => user.id == userId);
  }
}
