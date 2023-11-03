import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { ProductImageView } from './entity';

@Injectable()
export class ProductImageViewService extends ResourceViewService<ProductImageView> {
  constructor(
    @InjectRepository(ProductImageView) repo: Repository<ProductImageView>
  ) {
    super(repo);
  }
}
