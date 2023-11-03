import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { CustomerEmailView } from './entity';

@Injectable()
export class CustomerEmailViewService extends ResourceViewService<CustomerEmailView> {
  constructor(
    @InjectRepository(CustomerEmailView) repo: Repository<CustomerEmailView>
  ) {
    super(repo);
  }
}
