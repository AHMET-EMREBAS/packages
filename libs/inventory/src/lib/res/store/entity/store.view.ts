import { Store } from './store.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { PriceLevel } from '../../price-level';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Store, 'c');
  },
})
export class StoreView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
