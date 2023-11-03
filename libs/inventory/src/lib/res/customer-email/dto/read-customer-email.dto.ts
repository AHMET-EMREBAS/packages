import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadCustomerEmailDto extends BaseReadDto {
  @Property({ required: true, type: 'string', format: 'email' })
  email!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
