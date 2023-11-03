import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { ProductView } from './entity';

@Injectable()
export class ProductViewService extends ResourceViewService<ProductView> {
  constructor(@InjectRepository(ProductView) repo: Repository<ProductView>) {
    super(repo);
  }
}
