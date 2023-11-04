import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Customer } from './entity';
import { CustomerUniqueFields } from './customer.meta';

@Injectable()
export class CustomerService extends ResourceService<Customer> {
  constructor(@InjectRepository(Customer) repo: Repository<Customer>) {
    super(repo, CustomerUniqueFields);
  }
}
