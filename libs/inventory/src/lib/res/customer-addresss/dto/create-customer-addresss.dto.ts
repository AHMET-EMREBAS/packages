import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateCustomerAddresssDto {
  @Property({ required: true, type: 'string', maxLength: 100 })
  street!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  city!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  state!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  zip!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
