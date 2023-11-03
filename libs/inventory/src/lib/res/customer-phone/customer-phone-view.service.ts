import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { CustomerPhoneView } from './entity';

@Injectable()
export class CustomerPhoneViewService extends ResourceViewService<CustomerPhoneView> {
  constructor(
    @InjectRepository(CustomerPhoneView) repo: Repository<CustomerPhoneView>
  ) {
    super(repo);
  }
}
