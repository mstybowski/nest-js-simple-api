import { Controller, Get } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Get()
  findAll(): string {
    return 'This action returns all items';
  }
}
