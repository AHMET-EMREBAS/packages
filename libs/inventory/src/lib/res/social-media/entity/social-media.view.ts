import { SocialMedia } from './social-media.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(SocialMedia, 'c');
  },
})
export class SocialMediaView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
