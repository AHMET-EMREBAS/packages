import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem, OrderItemView } from './entity';
import { OrderItemController } from './order-item.controller';
import { OrderItemService } from './order-item.service';
import { OrderItemViewService } from './order-item-view.service';
import { OrderItemViewController } from './order-item-view.controller';
import { Sku } from '../sku';
import { PriceLevel } from '../price-level';
import { Order } from '../order';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderItem,
      OrderItemView,
      Sku,
      PriceLevel,
      Order,
    ]),
  ],
  controllers: [OrderItemController, OrderItemViewController],
  providers: [OrderItemService, OrderItemViewService],
})
export class OrderItemModule {}
