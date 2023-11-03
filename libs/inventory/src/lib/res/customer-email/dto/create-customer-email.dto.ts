import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateCustomerEmailDto {
  @Property({ required: true, type: 'string', format: 'email' })
  email!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
