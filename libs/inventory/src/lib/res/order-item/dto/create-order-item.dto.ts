import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateOrderItemDto {
  @Property({ required: true, type: 'number' })
  quantity!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  sku!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  priceLevel!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  orderGroup!: number;
}
