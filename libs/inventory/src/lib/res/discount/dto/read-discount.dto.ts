import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadDiscountDto extends BaseReadDto {
  @Property({ required: true, type: 'number', minimum: 0 })
  percent!: number;

  @Property({ type: 'number', required: true, minimum: 1 })
  sku!: number;
}
