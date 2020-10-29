import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':group')
  async getHello(@Param('group') group: string): Promise<string> {
    return this.appService.getHello(group);
  }
}
