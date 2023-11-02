import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Category } from './entity';

@Injectable()
export class CategoryService extends ResourceService<Category> {
  constructor(@InjectRepository(Category) repo: Repository<Category>) {
    super(repo);
  }
}
