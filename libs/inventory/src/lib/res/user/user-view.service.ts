import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { UserView } from './entity';

@Injectable()
export class UserViewService extends ResourceViewService<UserView> {
  constructor(@InjectRepository(UserView) repo: Repository<UserView>) {
    super(repo);
  }
}
