import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateCustomerPhoneDto {
  @Property({ required: true, type: 'string', format: 'phone' })
  phone!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
