import { Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadCategoryDto extends BaseReadDto {
  @Property({ type: 'string' })
  name!: string;
}
