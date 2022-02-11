import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  confirmpassword: string;
}

export class ResDto {
  msg: string;
}

export class LoginAuthDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
