import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Email } from '../entity';
import { EmailViewSearchables } from '../email.meta';

@Dto()
export class QueryEmailViewDto extends QueryDto {
  @SearchProperty(EmailViewSearchables)
  override search?: FindOptionsOrder<Email>;
}
