import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import config from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, UserModule],
})
export class AppModule {}
