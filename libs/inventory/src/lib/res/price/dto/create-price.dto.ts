import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreatePriceDto {
  @Property({ required: true, type: 'number', minimum: 0 })
  price!: number;

  @Property({ required: true, type: 'number', minimum: 0 })
  cost!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  sku!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  priceLevel!: number;
}
