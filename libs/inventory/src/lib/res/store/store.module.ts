import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store, StoreView } from './entity';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { StoreViewService } from './store-view.service';
import { StoreViewController } from './store-view.controller';
import { PriceLevel } from '../price-level';

@Module({
  imports: [TypeOrmModule.forFeature([Store, StoreView, PriceLevel])],
  controllers: [StoreController, StoreViewController],
  providers: [StoreService, StoreViewService],
})
export class StoreModule {}
