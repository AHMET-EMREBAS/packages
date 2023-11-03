import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateProductImageDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  name!: string;

  @Property({ required: true, type: 'string' })
  image!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
