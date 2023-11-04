import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { ProfileImage } from './entity';
import { ProfileImageUniqueFields } from './profile-image.meta';

@Injectable()
export class ProfileImageService extends ResourceService<ProfileImage> {
  constructor(@InjectRepository(ProfileImage) repo: Repository<ProfileImage>) {
    super(repo, ProfileImageUniqueFields);
  }
}
