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

@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
    }),
    TerminusModule.forRoot({ logger: true, errorLogStyle: 'pretty' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'testdb',
      username: 'testuser',
      password: 'testuser',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),

    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    InventoryModule,
  ],
  controllers: [AppHealthController, AppViewController],
  providers: [AppEventListener],
})
export class AppModule {}
