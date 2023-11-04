import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Department } from './entity';
import { DepartmentUniqueFields } from './department.meta';

@Injectable()
export class DepartmentService extends ResourceService<Department> {
  constructor(@InjectRepository(Department) repo: Repository<Department>) {
    super(repo, DepartmentUniqueFields);
  }
}
