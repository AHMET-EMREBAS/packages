import { Controller, Get, Render } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Views')
@Controller('views')
export class AppViewController {
  @Get()
  @Render('index')
  @ApiOperation({ summary: 'Index Page' })
  root() {
    return { message: 'Hello World' };
  }

  @Get('about')
  @Render('./pages/about')
  @ApiOperation({ summary: 'About Page' })
  about() {
    return { message: 'Would you really like to know about us?' };
  }
}
