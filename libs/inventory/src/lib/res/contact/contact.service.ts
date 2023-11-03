import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Contact } from './entity';

@Injectable()
export class ContactService extends ResourceService<Contact> {
  constructor(@InjectRepository(Contact) repo: Repository<Contact>) {
    super(repo);
  }
}
