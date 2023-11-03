import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Email } from '../entity';

@Dto()
export class QueryEmailDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Email>;
}
