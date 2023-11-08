import { Dto, Property } from '../imports';

@Dto()
export class CreateQuantityDto {
  @Property({ type: 'number', minimum: 0 })
  quantity!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  sku!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  store!: number;
}
