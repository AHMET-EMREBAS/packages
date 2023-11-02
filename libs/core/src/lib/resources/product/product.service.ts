import { Product } from './entity';
import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';

@Injectable()
export class ProductService extends ResourceService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo);
  }
}
