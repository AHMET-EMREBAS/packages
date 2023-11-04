import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Price } from './entity';
import { PriceUniqueFields } from './price.meta';

@Injectable()
export class PriceService extends ResourceService<Price> {
  constructor(@InjectRepository(Price) repo: Repository<Price>) {
    super(repo, PriceUniqueFields);
  }
}
