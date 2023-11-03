import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateSkuDto {
  @Property({ required: true, type: 'string', minLength: 12, maxLength: 14 })
  barcode!: string;

  @Property({ required: true, type: 'string' })
  sku!: string;

  @Property({ type: 'string', maxLength: 400 })
  description!: string;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  features?: IDDto[];

  @Property({ type: 'number', required: true, minimum: 1 })
  product!: number;
}
