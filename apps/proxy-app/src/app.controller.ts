import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto, RegisterDto, TransferDto } from './app.dtos';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('transfer')
  async transfer(@Body() data: TransferDto) {
    const formData = new URLSearchParams();

    formData.append('sum', data.sum);
    formData.append('pin', data.pin);
    formData.append('recipient', data.recipient);
    return this.appService.proxy('/transfer', formData);
  }

  @Post('/login')
  async login(@Body() data: LoginDto) {
    const formData = new URLSearchParams();

    formData.append('login', data.login);
    formData.append('password', data.password);
    return this.appService.proxy('/login', formData);
  }

  @Post('register')
  async register(@Body() data: RegisterDto) {
    const formData = new URLSearchParams();

    formData.append('email', data.email);
    formData.append('password', data.password);
    return this.appService.proxy('/register', formData);
  }
}
