import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Customer } from './entity';

@Injectable()
export class CustomerService extends ResourceService<Customer> {
  constructor(@InjectRepository(Customer) repo: Repository<Customer>) {
    super(repo);
  }
}
