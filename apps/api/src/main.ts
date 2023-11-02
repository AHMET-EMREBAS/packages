import { bootstrap } from '@techbir/nest';
import { AppModule } from './app/app.module';

bootstrap({
  app: AppModule,
  name: 'API',
  port: process.env.PORT || 3000,
  prefix: 'api',
  origin: [],
});
