import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  controllers: [UsersController, AuthController],
})
export class UsersModule {}
