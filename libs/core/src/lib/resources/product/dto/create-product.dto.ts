import { Dto, Property} from '../imports';

@Dto()
export class CreateProductDto {
  @Property({ minLength: 3, maxLength: 30 })
  name!: string;
}
