import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Order } from './entity';

@Injectable()
export class OrderService extends ResourceService<Order> {
  constructor(@InjectRepository(Order) repo: Repository<Order>) {
    super(repo);
  }
}
