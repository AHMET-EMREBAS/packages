import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateStoreDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  name!: string;

  @Property({ type: 'number', minimum: 1 })
  priceLevel?: number;
}
