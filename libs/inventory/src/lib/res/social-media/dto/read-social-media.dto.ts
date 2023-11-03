import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadSocialMediaDto extends BaseReadDto {
  @Property({ required: true, type: 'string', maxLength: 30 })
  link!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}
