import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadCustomerAddresssDto extends BaseReadDto {
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