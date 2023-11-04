import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { CustomerEmail } from './entity';
import { CustomerEmailUniqueFields } from './customer-email.meta';

@Injectable()
export class CustomerEmailService extends ResourceService<CustomerEmail> {
  constructor(
    @InjectRepository(CustomerEmail) repo: Repository<CustomerEmail>
  ) {
    super(repo, CustomerEmailUniqueFields);
  }
}
