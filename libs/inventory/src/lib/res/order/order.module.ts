import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order, OrderView } from './entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderViewService } from './order-view.service';
import { OrderViewController } from './order-view.controller';
import { Customer } from '../customer';
import { ShippingAddress } from '../shipping-address';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderView, Customer, ShippingAddress]),
  ],
  controllers: [OrderController, OrderViewController],
  providers: [OrderService, OrderViewService],
})
export class OrderModule {}
