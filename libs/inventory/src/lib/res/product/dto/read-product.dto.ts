import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadProductDto extends BaseReadDto {
  @Property({ required: true, type: 'string' })
  name!: string;

  @Property({ type: 'string', maxLength: 300 })
  description!: string;

  @Property({ type: 'number', minimum: 1 })
  category?: number;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  features?: IDDto[];

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  images?: IDDto[];
}
