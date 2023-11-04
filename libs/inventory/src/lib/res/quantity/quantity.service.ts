import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Quantity } from './entity';
import { QuantityUniqueFields } from './quantity.meta';

@Injectable()
export class QuantityService extends ResourceService<Quantity> {
  constructor(@InjectRepository(Quantity) repo: Repository<Quantity>) {
    super(repo, QuantityUniqueFields);
  }
}
