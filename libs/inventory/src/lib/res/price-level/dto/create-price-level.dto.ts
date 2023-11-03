import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreatePriceLevelDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  priceLevel!: string;
}
