import { Price } from './price.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Sku } from '../../sku';
import { PriceLevel } from '../../price-level';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Price, 'c');
  },
})
export class PriceView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
