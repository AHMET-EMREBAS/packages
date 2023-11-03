import { Feature } from './feature.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Feature, 'c');
  },
})
export class FeatureView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
