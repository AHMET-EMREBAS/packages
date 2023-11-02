import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Category } from './category.entity';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .addSelect('c.name', 'name')
      .from(Category, 'c');
  },
})
export class CategoryView {
  @ViewColumn() id!: number;
}
