import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreatePhoneDto {
  @Property({ required: true, type: 'string', format: 'phone' })
  phone!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
