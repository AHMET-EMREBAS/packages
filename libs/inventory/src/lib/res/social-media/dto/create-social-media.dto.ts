import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateSocialMediaDto {
  @Property({ required: true, type: 'string', maxLength: 30 })
  link!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
