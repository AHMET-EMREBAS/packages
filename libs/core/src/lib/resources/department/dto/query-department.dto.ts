import { Dto, QueryDto, SearchProperty } from '@techbir/typeorm';
import { DepartmentMeta } from '../department.meta';
import { FindOptionsOrder } from 'typeorm';
import { Department } from '../entity';

@Dto()
export class QueryDepartmentDto extends QueryDto {
  @SearchProperty(DepartmentMeta.searchables)
  override search?: FindOptionsOrder<Department>;
}
