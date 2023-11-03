import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sku, SkuView } from './entity';
import { SkuController } from './sku.controller';
import { SkuService } from './sku.service';
import { SkuViewService } from './sku-view.service';
import { SkuViewController } from './sku-view.controller';
import { Feature } from '../feature';
import { Product } from '../product';

@Module({
  imports: [TypeOrmModule.forFeature([Sku, SkuView, Feature, Product])],
  controllers: [SkuController, SkuViewController],
  providers: [SkuService, SkuViewService],
})
export class SkuModule {}
