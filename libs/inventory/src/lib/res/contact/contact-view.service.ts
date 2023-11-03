import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { ContactView } from './entity';

@Injectable()
export class ContactViewService extends ResourceViewService<ContactView> {
  constructor(@InjectRepository(ContactView) repo: Repository<ContactView>) {
    super(repo);
  }
}
