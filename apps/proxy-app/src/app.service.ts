import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async proxy(endpoint: string, data: URLSearchParams): Promise<AxiosResponse> {
    try {
      const response = await lastValueFrom(
        this.httpService.post(
          `http://bank-app:5000/api${endpoint}`,
          data.toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
      );
      return response;
    } catch (error) {
      if (error.response) {
        throw new HttpException(
          {
            status: error.response.status,
            error: error.response.statusText,
            message: error.response.data,
          },
          error.response.status,
        );
      }
      throw new HttpException('An unexpected error occurred', 500);
    }
  }
}
