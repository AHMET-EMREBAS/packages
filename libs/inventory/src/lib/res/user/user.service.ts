import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { User } from './entity';
import { UserUniqueFields } from './user.meta';

@Injectable()
export class UserService extends ResourceService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo, UserUniqueFields);
  }
}
