import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Product } from './entity';
import { ProductUniqueFields } from './product.meta';

@Injectable()
export class ProductService extends ResourceService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo, ProductUniqueFields);
  }
}
