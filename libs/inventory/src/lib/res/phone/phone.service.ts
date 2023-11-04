import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Phone } from './entity';
import { PhoneUniqueFields } from './phone.meta';

@Injectable()
export class PhoneService extends ResourceService<Phone> {
  constructor(@InjectRepository(Phone) repo: Repository<Phone>) {
    super(repo, PhoneUniqueFields);
  }
}
