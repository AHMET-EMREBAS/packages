import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { ProfileImageView } from './entity';

@Injectable()
export class ProfileImageViewService extends ResourceViewService<ProfileImageView> {
  constructor(
    @InjectRepository(ProfileImageView) repo: Repository<ProfileImageView>
  ) {
    super(repo);
  }
}
