import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Quantity } from './entity';

@Injectable()
export class QuantityService extends ResourceService<Quantity> {
  constructor(@InjectRepository(Quantity) repo: Repository<Quantity>) {
    super(repo);
  }
}
