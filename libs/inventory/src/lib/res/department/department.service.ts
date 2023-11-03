import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Department } from './entity';

@Injectable()
export class DepartmentService extends ResourceService<Department> {
  constructor(@InjectRepository(Department) repo: Repository<Department>) {
    super(repo);
  }
}
