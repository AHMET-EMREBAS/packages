import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { CategoryView } from './entity';

@Injectable()
export class CategoryViewService extends ResourceViewService<CategoryView> {
  constructor(@InjectRepository(CategoryView) repo: Repository<CategoryView>) {
    super(repo);
  }
}
