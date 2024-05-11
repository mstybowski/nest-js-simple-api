import { Controller, Post } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Post()
  costam(): string {
    return 'This action returns all items';
  }
}
