import { IsNotEmpty, IsPositive, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsPositive()
  age: number;

  @IsEmail()
  email: string;
}
