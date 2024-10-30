import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

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
  async login(@Body() data: LoginDto, @Res() res: Response) {
    const formData = new URLSearchParams();

    formData.append('login', data.login);
    formData.append('password', data.password);

    try {
      const resp = await this.appService.proxy('/login', formData);
      const cookies = resp.headers['set-cookie'];
      if (cookies) {
        console.log(cookies);
        res.setHeader('Set-Cookie', cookies);
      } else {
        console.log('no cookies');
      }
      res.redirect('/?view=profile');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.log(e);
      res.redirect('/?view=login&error=Invalid login or password');
    }
  }

  @Post('register')
  async register(@Body() data: RegisterDto, @Res() res: Response) {
    const formData = new URLSearchParams();

    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    try {
      await this.appService.proxy('/register', formData);

      res.redirect('/?view=login&message=Account successfully created');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      res.redirect(
        '/?view=login&message=Database Error - Please try again later',
      );
    }
    return this.appService.proxy('/register', formData);
  }
}
