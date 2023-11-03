import { ReadCategoryDto } from './dto';
import { Category } from './entity';
import { Rest } from './imports';

export const CategoryEntityName = 'Category';
export const CategoryViewName = 'Category';
export const CategorySingularPath = 'category';
export const CategoryPluralPath = 'categorys';
export const CategorySingularViewPath = 'category-view';
export const CategoryPluralViewPath = 'categorys-view';

export const CategorySearchables: (keyof Category)[] = [];
export const CategoryUniqueFields: (keyof Category)[] = [];
export const CategoryViewSearchables: (keyof Category)[] = [];

export const CategoryRest = new Rest(
  CategoryEntityName,
  CategorySingularPath,
  CategoryPluralPath,
  ReadCategoryDto
);
