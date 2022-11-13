import { Body, Controller, Post } from '@nestjs/common';
import { PostRouteDto } from './dto';

@Controller()
export class AppController {
  @Post('/user')
  postRoute(@Body() dto: PostRouteDto) {
    console.log('dto', dto);
    return 'postRoute()';
  }
}
