import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Sku } from './entity';
import { SkuUniqueFields } from './sku.meta';

@Injectable()
export class SkuService extends ResourceService<Sku> {
  constructor(@InjectRepository(Sku) repo: Repository<Sku>) {
    super(repo, SkuUniqueFields);
  }
}
