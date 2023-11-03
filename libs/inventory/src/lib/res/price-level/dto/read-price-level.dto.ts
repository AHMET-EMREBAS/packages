import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadPriceLevelDto extends BaseReadDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  priceLevel!: string;
}
