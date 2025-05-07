import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/*
Controllers are responsible for handling incoming requests and returning responses to the client
the routing mechanism controls the flow of requests to the appropriate controller methods
*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    //return the service that calls the method
    return this.appService.getHello();
  }
}
