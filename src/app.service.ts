import { Injectable } from '@nestjs/common';
//This file is a service provider file
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is a test for the NestJS API.';
  }
}
