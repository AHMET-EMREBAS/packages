import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Contact } from '../entity';

@Dto()
export class QueryContactViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Contact>;
}
