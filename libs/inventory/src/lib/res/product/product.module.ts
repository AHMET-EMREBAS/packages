import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductView } from './entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductViewService } from './product-view.service';
import { ProductViewController } from './product-view.controller';
import { Category } from '../category';
import { Feature } from '../feature';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductView, Category, Feature]),
  ],
  controllers: [ProductController, ProductViewController],
  providers: [ProductService, ProductViewService],
})
export class ProductModule {}
