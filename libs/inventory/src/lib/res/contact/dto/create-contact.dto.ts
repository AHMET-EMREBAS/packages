import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateContactDto {
  @Property({ type: 'string', format: 'phone' })
  phone!: string;

  @Property({ type: 'string', format: 'url' })
  website!: string;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  roles?: IDDto[];
}
