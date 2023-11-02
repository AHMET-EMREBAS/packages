import { Property, Dto } from '@techbir/typeorm';

@Dto()
export class CreateDepartmentDto {
  @Property({ minLength: 3, maxLength: 30 })
  name!: string;
}
