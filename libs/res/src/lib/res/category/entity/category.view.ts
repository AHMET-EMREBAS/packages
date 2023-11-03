import { Category } from './category.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Category, 'c');
  },
})
export class CategoryView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
