import { DataSource, ViewColumn, ViewEntity } from '../imports';
import { Category } from './category.entity';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Category, 'c');
  },
})
export class CategoryView {
  @ViewColumn() id!: number;
}
