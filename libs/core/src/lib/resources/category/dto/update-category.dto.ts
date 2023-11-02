import { CreateCategoryDto } from './create-category.dto';
import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/typeorm';

@Dto()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
