import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { OrderView } from './entity';

@Injectable()
export class OrderViewService extends ResourceViewService<OrderView> {
  constructor(@InjectRepository(OrderView) repo: Repository<OrderView>) {
    super(repo);
  }
}
