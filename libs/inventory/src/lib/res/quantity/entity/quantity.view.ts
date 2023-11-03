import { Quantity } from './quantity.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Sku } from '../../sku';
import { Store } from '../../store';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Quantity, 'c');
  },
})
export class QuantityView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
