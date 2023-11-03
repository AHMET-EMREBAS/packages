import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateOrderDto {
  @Property({ type: 'number', required: true, minimum: 1 })
  customer!: number;

  @Property({ type: 'number', minimum: 1 })
  shippingAddress?: number;
}
