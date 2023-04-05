import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { AuthService } from './services/auth/auth.service';
import { ProtectedRouteMiddleware } from 'src/middlewares/protected-route/protected-route.middleware';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProtectedRouteMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.ALL });
  }
}
