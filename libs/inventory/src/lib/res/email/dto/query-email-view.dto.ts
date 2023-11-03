import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Email } from '../entity';

@Dto()
export class QueryEmailViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Email>;
}
