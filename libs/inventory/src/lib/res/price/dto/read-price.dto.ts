import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadPriceDto extends BaseReadDto {
  @Property({ required: true, type: 'number', minimum: 0 })
  price!: number;

  @Property({ required: true, type: 'number', minimum: 0 })
  cost!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  sku!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  priceLevel!: number;
}
