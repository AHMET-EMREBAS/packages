import { Dto, Property } from '../imports';

@Dto()
export class CreateCategoryDto {
  @Property({ type: 'string', minLength: 3, maxLength: 30 })
  name!: string;
}
