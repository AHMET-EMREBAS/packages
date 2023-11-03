import { PriceLevel } from './price-level.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(PriceLevel, 'c');
  },
})
export class PriceLevelView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
