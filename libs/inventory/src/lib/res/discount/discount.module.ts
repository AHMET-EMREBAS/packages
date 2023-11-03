import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discount, DiscountView } from './entity';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';
import { DiscountViewService } from './discount-view.service';
import { DiscountViewController } from './discount-view.controller';
import { Sku } from '../sku';

@Module({
  imports: [TypeOrmModule.forFeature([Discount, DiscountView, Sku])],
  controllers: [DiscountController, DiscountViewController],
  providers: [DiscountService, DiscountViewService],
})
export class DiscountModule {}
