import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateProductDto {
  @Property({ required: true, type: 'string', minLength: 12, maxLength: 14 })
  barcode!: string;

  @Property({ required: true, type: 'string' })
  name!: string;

  @Property({ type: 'string', maxLength: 300 })
  description!: string;

  @Property({ type: 'number', minimum: 1 })
  category?: number;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  features?: IDDto[];
}
