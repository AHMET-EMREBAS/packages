import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';

import { AppHealthController } from './app-health.controller';
import { AppViewController } from './app-view.controller';
import { HttpModule } from '@nestjs/axios';
import { AppEventListener } from './app-events.listener';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { InventoryModule } from '@techbir/inventory';
import { MetaController } from './meta.controller';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
      exclude: ['api', 'api/**'],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 5000,
        limit: 1,
        name: 'post',
      },
      {
        ttl: 1000,
        limit: 1,
        name: 'query',
      },
    ]),
    TerminusModule.forRoot({ logger: true, errorLogStyle: 'pretty' }),
    TypeOrmModule.forRoot({
      // type: 'mysql',
      // database: 'testdb',
      // username: 'testuser',
      // password: 'testuser',
      type: 'better-sqlite3',
      database: './tmp/database/main.sqlite',

      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    InventoryModule,
  ],
  controllers: [AppHealthController, AppViewController, MetaController],
  providers: [
    AppEventListener,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
