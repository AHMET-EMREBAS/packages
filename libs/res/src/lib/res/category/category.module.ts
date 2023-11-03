import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, CategoryView } from './entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryViewService } from './category-view.service';
import { CategoryViewController } from './category-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryController, CategoryViewController],
  providers: [CategoryService, CategoryViewService],
})
export class CategoryModule {}
