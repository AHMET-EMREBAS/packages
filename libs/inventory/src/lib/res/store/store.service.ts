import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Store } from './entity';

@Injectable()
export class StoreService extends ResourceService<Store> {
  constructor(@InjectRepository(Store) repo: Repository<Store>) {
    super(repo);
  }
}
