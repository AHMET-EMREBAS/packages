import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Contact } from '../entity';

@Dto()
export class QueryContactDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Contact>;
}
