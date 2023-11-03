import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage, ProductImageView } from './entity';
import { ProductImageController } from './product-image.controller';
import { ProductImageService } from './product-image.service';
import { ProductImageViewService } from './product-image-view.service';
import { ProductImageViewController } from './product-image-view.controller';
import { User } from '../../user';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage, ProductImageView, User])],
  controllers: [ProductImageController, ProductImageViewController],
  providers: [ProductImageService, ProductImageViewService],
})
export class ProductImageModule {}
