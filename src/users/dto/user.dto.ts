import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: false })
  age?: number;
}
