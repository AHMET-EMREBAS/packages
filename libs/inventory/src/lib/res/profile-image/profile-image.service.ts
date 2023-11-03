import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { ProfileImage } from './entity';

@Injectable()
export class ProfileImageService extends ResourceService<ProfileImage> {
  constructor(@InjectRepository(ProfileImage) repo: Repository<ProfileImage>) {
    super(repo);
  }
}
