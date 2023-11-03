import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Price, PriceView } from './entity';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { PriceViewService } from './price-view.service';
import { PriceViewController } from './price-view.controller';
import { Sku } from '../sku';
import { PriceLevel } from '../price-level';

@Module({
  imports: [TypeOrmModule.forFeature([Price, PriceView, Sku, PriceLevel])],
  controllers: [PriceController, PriceViewController],
  providers: [PriceService, PriceViewService],
})
export class PriceModule {}
