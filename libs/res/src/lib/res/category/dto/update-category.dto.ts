import { PartialType, Dto } from '../imports';
import { CreateCategoryDto } from './create-category.dto';

@Dto()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
