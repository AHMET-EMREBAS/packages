import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Product } from './entity';

@Injectable()
export class ProductService extends ResourceService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo);
  }
}
