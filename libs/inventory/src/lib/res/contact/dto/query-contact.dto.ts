import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Contact } from '../entity';
import { ContactSearchables } from '../contact.meta';

@Dto()
export class QueryContactDto extends QueryDto {
  @SearchProperty(ContactSearchables)
  override search?: FindOptionsOrder<Contact>;
}
