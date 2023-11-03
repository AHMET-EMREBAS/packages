import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadCustomerPhoneDto extends BaseReadDto {
  @Property({ required: true, type: 'string', format: 'phone' })
  phone!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
