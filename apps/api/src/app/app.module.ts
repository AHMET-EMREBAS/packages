import { Module, OnModuleInit } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';

import { AppHealthController } from './app-health.controller';
import { AppViewController } from './app-view.controller';
import { HttpModule } from '@nestjs/axios';
import { AppEventListener } from './app-events.listener';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {
  CategoryModule,
  ProductImageModule,
  FeatureModule,
  ProductModule,
} from '@techbir/inventory';
import { Contact, Customer } from './sample/data';
import { Repository } from 'typeorm';

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
    TypeOrmModule.forFeature([Customer, Contact]),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    CategoryModule,
    ProductImageModule,
    FeatureModule,
    ProductModule,
  ],
  controllers: [AppHealthController, AppViewController],
  providers: [AppEventListener],
})
export class AppModule implements OnModuleInit {
  constructor(
    @InjectRepository(Contact) private readonly c: Repository<Contact>,
    @InjectRepository(Customer) private readonly p: Repository<Customer>
  ) {}

  async onModuleInit() {
    const p1 = await this.p.save({ name: 'p1' });

    const c1 = await this.c.save({ address: 'contact 1', customer: p1.id });

    console.log(await this.c.find());
    await this.p.delete(p1.id);
    console.log(await this.c.find());
  }
}
