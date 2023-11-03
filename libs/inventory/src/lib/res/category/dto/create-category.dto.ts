import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateCategoryDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  category!: string;
}
