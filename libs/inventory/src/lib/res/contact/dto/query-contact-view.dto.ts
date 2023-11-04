import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Contact } from '../entity';
import { ContactViewSearchables } from '../contact.meta';

@Dto()
export class QueryContactViewDto extends QueryDto {
  @SearchProperty(ContactViewSearchables)
  override search?: FindOptionsOrder<Contact>;
}
