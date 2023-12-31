import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { ProductImage } from './entity';
import { ProductImageUniqueFields } from './product-image.meta';

@Injectable()
export class ProductImageService extends ResourceService<ProductImage> {
  constructor(@InjectRepository(ProductImage) repo: Repository<ProductImage>) {
    super(repo, ProductImageUniqueFields);
  }
}
