import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadOrderDto extends BaseReadDto {
  @Property({ type: 'number', required: true, minimum: 1 })
  customer!: number;

  @Property({ type: 'number', minimum: 1 })
  shippingAddress?: number;
}
