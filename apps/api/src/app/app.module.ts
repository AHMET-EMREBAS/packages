import { Logger, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  TerminusModule,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

import { AppHealthController } from './app-health.controller';
import { AppViewController } from './app-view.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    TerminusModule.forRoot({ logger: true, errorLogStyle: 'pretty' }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: './tmp/database/main.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
  ],
  controllers: [AppHealthController, AppViewController],
})
export class AppModule {}
