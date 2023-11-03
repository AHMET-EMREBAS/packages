import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { CustomerAddresssView } from './entity';

@Injectable()
export class CustomerAddresssViewService extends ResourceViewService<CustomerAddresssView> {
  constructor(
    @InjectRepository(CustomerAddresssView)
    repo: Repository<CustomerAddresssView>
  ) {
    super(repo);
  }
}
