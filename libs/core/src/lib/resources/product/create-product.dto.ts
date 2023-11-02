import { Property, Dto } from '@techbir/typeorm';

@Dto()
export class CreateProductDto {
  @Property({ minLength: 3, maxLength: 30 })
  name!: string;
}
