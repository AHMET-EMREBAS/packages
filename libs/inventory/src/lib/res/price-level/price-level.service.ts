import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { PriceLevel } from './entity';
import { PriceLevelUniqueFields } from './price-level.meta';

@Injectable()
export class PriceLevelService extends ResourceService<PriceLevel> {
  constructor(@InjectRepository(PriceLevel) repo: Repository<PriceLevel>) {
    super(repo, PriceLevelUniqueFields);
  }
}
