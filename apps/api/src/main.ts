import { bootstrap } from '@techbir/core';
import { env } from '@techbir/common';
import { AppModule } from './app/app.module';
import { join } from 'path';

bootstrap({
  appModule: AppModule,
  name: 'API',
  port: env('PORT'),
  prefix: 'api',
  origin: [],
  publicPath: join(__dirname, 'public'),
  viewsPath: join(__dirname, 'views'),
});
