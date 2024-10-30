import { IsEmail, IsString, MinLength, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @Transform(({ value }) => value.trim())
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^[A-Za-z0-9!@#$%^&*()_+=-]+$/, {
    message: 'Password contains invalid characters',
  })
  password: string;

  @IsString()
  @Matches(/^[A-Za-z]+$/, { message: 'First name contains invalid characters' })
  @Transform(({ value }) => value.trim())
  first_name: string;

  @IsString()
  @Matches(/^[A-Za-z]+$/, { message: 'Last name contains invalid characters' })
  @Transform(({ value }) => value.trim())
  last_name: string;
}

export class LoginDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @Matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, {
    message: 'Email contains invalid characters',
  })
  login: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^[A-Za-z0-9!@#$%^&*()_+=-]+$/, {
    message: 'Password contains invalid characters',
  })
  password: string;
}

export class TransferDto {
  @IsString()
  @Matches(/^[1-9][0-9]*$/, { message: 'Sum must be a positive number' })
  sum: string;

  @IsString()
  @Matches(/^\d+$/, { message: 'Recipient must be a numeric string' })
  recipient: string;

  @IsString()
  @Matches(/^\d+$/, { message: 'PIN must be a numeric string' })
  pin: string;
}
