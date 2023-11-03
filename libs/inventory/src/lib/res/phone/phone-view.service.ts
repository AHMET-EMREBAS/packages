import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { PhoneView } from './entity';

@Injectable()
export class PhoneViewService extends ResourceViewService<PhoneView> {
  constructor(@InjectRepository(PhoneView) repo: Repository<PhoneView>) {
    super(repo);
  }
}
