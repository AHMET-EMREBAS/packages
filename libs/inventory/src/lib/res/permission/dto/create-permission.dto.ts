import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreatePermissionDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  permission!: string;
}
