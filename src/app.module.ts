import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
