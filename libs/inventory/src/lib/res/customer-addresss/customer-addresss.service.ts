import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { CustomerAddresss } from './entity';

@Injectable()
export class CustomerAddresssService extends ResourceService<CustomerAddresss> {
  constructor(
    @InjectRepository(CustomerAddresss) repo: Repository<CustomerAddresss>
  ) {
    super(repo);
  }
}
