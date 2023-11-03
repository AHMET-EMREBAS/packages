import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { CustomerPhone } from './entity';

@Injectable()
export class CustomerPhoneService extends ResourceService<CustomerPhone> {
  constructor(
    @InjectRepository(CustomerPhone) repo: Repository<CustomerPhone>
  ) {
    super(repo);
  }
}
