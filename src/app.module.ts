import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import User from './users/users.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
  ],
})
export class AppModule {}
