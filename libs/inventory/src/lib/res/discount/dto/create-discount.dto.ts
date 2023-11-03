import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateDiscountDto {
  @Property({ required: true, type: 'number', minimum: 0 })
  percent!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  sku!: number;
}
