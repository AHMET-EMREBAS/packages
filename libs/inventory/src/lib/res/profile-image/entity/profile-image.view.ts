import { ProfileImage } from './profile-image.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(ProfileImage, 'c');
  },
})
export class ProfileImageView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
