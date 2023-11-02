import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class AppViewController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello World' };
  }

  @Get('about')
  @Render('pages/about')

  about(){ 
    return { message:"Would you really like to know about us?"}
  }
}
