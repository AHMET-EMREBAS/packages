import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductView } from './entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductViewService } from './product-view.service';
import { ProductViewController } from './product-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductView])],
  controllers: [ProductController, ProductViewController],
  providers: [ProductService, ProductViewService],
})
export class ProductModule {}
