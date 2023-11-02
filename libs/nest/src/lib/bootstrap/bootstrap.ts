import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { ACCESS_TOKEN } from '../http';
import { join } from 'path';

var favicon = require('serve-favicon');

export type SwaggerOptions = {
  app: INestApplication;
  name: string;
  tag?: string;
};

/**
 * Configure Swagger UI
 * @param app
 */
function configureSwagger({ name, app, tag }: SwaggerOptions) {
  const config = new DocumentBuilder()
    .setTitle(`${name} API`)
    .addTag(tag || name)
    .addBearerAuth({ type: 'http' }, ACCESS_TOKEN)
    .build();

  const doc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, doc);
}

export type BootstrapOptions = {
  name: string;
  app: any;
  port: number | string;
  prefix: string;
  origin?: string[];
};

export async function bootstrap({
  app,
  name,
  port,
  prefix,
  origin,
}: BootstrapOptions) {
  const nestApp = await NestFactory.create(app);
  nestApp.setGlobalPrefix(prefix);

  nestApp.use(helmet.default());
  nestApp.enableCors({ origin });
  nestApp.enableVersioning();
  nestApp.use(favicon(join(__dirname, 'public', 'favicon.ico')));

  configureSwagger({ app, name, tag: name });

  await nestApp.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}
