import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Email } from '../entity';
import { EmailSearchables } from '../email.meta';

@Dto()
export class QueryEmailDto extends QueryDto {
  @SearchProperty(EmailSearchables)
  override search?: FindOptionsOrder<Email>;
}
