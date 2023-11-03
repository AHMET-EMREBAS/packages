import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Category } from './entity';
import { CategoryUniqueFields } from './category.meta';

@Injectable()
export class CategoryService extends ResourceService<Category> {
  constructor(@InjectRepository(Category) repo: Repository<Category>) {
    super(repo, CategoryUniqueFields);
  }
}
