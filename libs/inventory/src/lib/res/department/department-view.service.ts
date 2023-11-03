import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { DepartmentView } from './entity';

@Injectable()
export class DepartmentViewService extends ResourceViewService<DepartmentView> {
  constructor(
    @InjectRepository(DepartmentView) repo: Repository<DepartmentView>
  ) {
    super(repo);
  }
}
