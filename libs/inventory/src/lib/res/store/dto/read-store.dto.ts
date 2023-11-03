import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadStoreDto extends BaseReadDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  name!: string;

  @Property({ type: 'number', minimum: 1 })
  priceLevel?: number;
}
