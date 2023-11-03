import { Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadProductDto extends BaseReadDto {
  @Property({ type: 'string' })
  name!: string;
}
