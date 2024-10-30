import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto, RegisterDto, TransferDto } from './app.dtos';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('transfer')
  async transfer(@Body() data: TransferDto) {
    return this.appService.proxy('/transfer', data);
  }

  @Post('/login')
  async login(@Body() data: LoginDto) {
    return this.appService.proxy('/login', data);
  }

  @Post('register')
  async register(@Body() data: RegisterDto) {
    return this.appService.proxy('/register', data);
  }
}
