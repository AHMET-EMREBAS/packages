import { ReadCategoryDto } from './dto';
import { Rest } from './imports';

export const CategoryEntityName = 'Category';
export const CategoryViewName = 'Category';
export const CategorySingularPath = 'category';
export const CategoryPluralPath = 'categorys';
export const CategorySingularViewPath = 'category-view';
export const CategoryPluralViewPath = 'categorys-view';

export const CategorySearchables: string[] = [];
export const CategoryUniqueFields: string[] = [];
export const CategoryViewSearchables: string[] = [];

export const CategoryRest = new Rest(
  CategoryEntityName,
  CategorySingularPath,
  CategoryPluralPath,
  ReadCategoryDto
);
