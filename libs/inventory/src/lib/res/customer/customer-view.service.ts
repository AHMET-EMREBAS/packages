import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { CustomerView } from './entity';

@Injectable()
export class CustomerViewService extends ResourceViewService<CustomerView> {
  constructor(@InjectRepository(CustomerView) repo: Repository<CustomerView>) {
    super(repo);
  }
}
