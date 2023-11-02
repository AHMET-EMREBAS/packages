import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { ACCESS_TOKEN } from '../http';
import { join } from 'path';
import { NotFoundExceptionFilter } from '../exceptions';

import { NestExpressApplication } from '@nestjs/platform-express';
const favicon = require('serve-favicon');

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
  appModule: any;
  port: number | string;
  prefix: string;
  publicPath: string;
  viewsPath: string;
  origin?: string[];
};

export async function bootstrap({
  appModule,
  name,
  port,
  prefix,
  origin,
  viewsPath,
  publicPath,
}: BootstrapOptions) {
  const nestApp = await NestFactory.create<NestExpressApplication>(appModule);
  nestApp.setGlobalPrefix(prefix, {
    exclude: [
      { path: '', method: RequestMethod.ALL },
      { path: '/:any', method: RequestMethod.ALL },
    ],
  });

  nestApp.use(helmet.default());
  nestApp.enableCors({ origin });
  nestApp.enableVersioning();
  nestApp.use(favicon(join(__dirname, 'public', 'favicon.ico')));

  // nestApp.useStaticAssets(publicPath);
  nestApp.setBaseViewsDir(viewsPath);
  nestApp.setViewEngine('ejs');

  nestApp.useGlobalFilters(new NotFoundExceptionFilter());

  // Swagger
  configureSwagger({ app: nestApp, name, tag: name });

  await nestApp.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}
