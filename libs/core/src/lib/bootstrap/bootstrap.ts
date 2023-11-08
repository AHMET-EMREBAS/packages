import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import serveFavicon = require('serve-favicon');
import { ACCESS_TOKEN } from '../controller';
import { Logger } from '../log';

export type SwaggerOptions = {
  /**
   * NestApplication
   */
  app: INestApplication;
  /**
   * App Name
   */
  name: string;

  tag?: string;

  /**
   * App Version
   */
  version?: string;
};

/**
 * Configure swagger
 * @param param0
 */
function configureSwagger({ name, app, tag, version }: SwaggerOptions) {
  const config = new DocumentBuilder()
    .setTitle(`Api`)

    .setVersion(version || '0.0.1')
    .addTag(tag || name)
    .addBearerAuth({ type: 'http' }, ACCESS_TOKEN)
    .setDescription('API Documentation')
    .build();

  const doc = SwaggerModule.createDocument(app, { ...config });

  SwaggerModule.setup('api', app, { ...doc });
}

export type BootstrapOptions = {
  /**
   * Application Name
   */
  name: string;

  /**
   * NestJS AppModule
   */
  appModule: any;

  port: number | string;

  /**
   * Api prefix like 'api';
   */
  prefix: string;

  /**
   * Public directory which will be served through root / path.
   */
  publicPath: string;

  /**
   * View path for server side (ejs) pages
   */
  viewsPath: string;

  /**
   * List of domains that can make request to this server
   */
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
  const logger = new Logger('Bootstrap');
  const nestApp = await NestFactory.create<NestExpressApplication>(appModule, {
    logger,
  });

  nestApp.setGlobalPrefix(prefix, {
    exclude: [
      { path: '', method: RequestMethod.ALL },
      { path: 'public', method: RequestMethod.ALL },
      { path: 'public/:any', method: RequestMethod.ALL },
      { path: 'views', method: RequestMethod.ALL },
      { path: 'views/:any', method: RequestMethod.ALL },
    ],
  });
  if (origin?.length > 0) {
    nestApp.enableCors({ origin });
  } else {
    nestApp.enableCors();
  }
  nestApp.enableVersioning();

  nestApp.use(helmet.default());
  nestApp.use(serveFavicon(join(__dirname, 'public', 'favicon.svg')));

  nestApp.useStaticAssets(publicPath);

  nestApp.setBaseViewsDir(viewsPath);
  nestApp.setViewEngine('ejs');

  // Swagger
  configureSwagger({ app: nestApp, name, tag: name });

  await nestApp.listen(port);

  logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}
