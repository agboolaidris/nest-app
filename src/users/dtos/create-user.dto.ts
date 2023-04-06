export class CreateUserDto {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class CreateUserServiceDto {
  username: string;
  email: string;
  password: string;
}
