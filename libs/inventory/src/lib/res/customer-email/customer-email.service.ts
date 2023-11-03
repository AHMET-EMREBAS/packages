import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { CustomerEmail } from './entity';

@Injectable()
export class CustomerEmailService extends ResourceService<CustomerEmail> {
  constructor(
    @InjectRepository(CustomerEmail) repo: Repository<CustomerEmail>
  ) {
    super(repo);
  }
}
