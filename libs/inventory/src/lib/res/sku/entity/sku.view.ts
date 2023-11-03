import { Sku } from './sku.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Feature } from '../../feature';
import { Product } from '../../product';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource.createQueryBuilder().select('c.id', 'id').from(Sku, 'c');
  },
})
export class SkuView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
