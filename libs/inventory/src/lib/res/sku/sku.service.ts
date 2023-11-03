import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Sku } from './entity';

@Injectable()
export class SkuService extends ResourceService<Sku> {
  constructor(@InjectRepository(Sku) repo: Repository<Sku>) {
    super(repo);
  }
}
