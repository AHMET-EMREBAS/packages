import { Property, Dto } from '@techbir/typeorm';

@Dto()
export class CreateCategoryDto {
  @Property({ minLength: 3, maxLength: 30 })
  name!: string;
}
