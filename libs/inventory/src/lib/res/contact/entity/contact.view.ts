import { Contact } from './contact.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Role } from '../../role';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Contact, 'c');
  },
})
export class ContactView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
