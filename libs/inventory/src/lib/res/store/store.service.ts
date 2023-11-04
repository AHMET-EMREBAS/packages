import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Store } from './entity';
import { StoreUniqueFields } from './store.meta';

@Injectable()
export class StoreService extends ResourceService<Store> {
  constructor(@InjectRepository(Store) repo: Repository<Store>) {
    super(repo, StoreUniqueFields);
  }
}
