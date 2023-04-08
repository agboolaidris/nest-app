import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { SignUpDto } from '../../dtos/sign-up.dto';

@Injectable()
export class PasswordValidationPipe implements PipeTransform {
  transform(value: SignUpDto) {
    const { password, confirmPassword } = value;
    if (password !== confirmPassword)
      throw new BadRequestException(['Password doesn"t match']);
    return value;
  }
}
