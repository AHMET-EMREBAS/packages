import { bootstrap } from '@techbir/nest';
import { AppModule } from './app/app.module';
import { join } from 'path';

bootstrap({
  appModule: AppModule,
  name: 'API',
  port: process.env.PORT || 3000,
  prefix: 'api',
  origin: [],
  publicPath: join(__dirname, 'public'),
  viewsPath: join(__dirname, 'views'),
});
