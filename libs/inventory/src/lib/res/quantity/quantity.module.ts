import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quantity, QuantityView } from './entity';
import { QuantityController } from './quantity.controller';
import { QuantityService } from './quantity.service';
import { QuantityViewService } from './quantity-view.service';
import { QuantityViewController } from './quantity-view.controller';
import { Sku } from '../sku';
import { Store } from '../store';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity, QuantityView, Sku, Store])],
  controllers: [QuantityController, QuantityViewController],
  providers: [QuantityService, QuantityViewService],
})
export class QuantityModule {}
