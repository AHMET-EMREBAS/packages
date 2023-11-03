import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateUserDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  firstName!: string;

  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  lastName!: string;

  @Property({ required: true, type: 'string', format: 'email' })
  username!: string;

  @Property({ required: true, type: 'string', format: 'password' })
  password!: string;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  roles?: IDDto[];
}
