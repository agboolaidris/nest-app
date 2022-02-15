import {
  Injectable,
  BadRequestException,
  ExecutionContext,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info) {
    console.log(user, info);
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new BadRequestException('Just a custom message...');
    }
    return user;
  }
}
