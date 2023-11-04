import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Skill } from './entity';
import { SkillUniqueFields } from './skill.meta';

@Injectable()
export class SkillService extends ResourceService<Skill> {
  constructor(@InjectRepository(Skill) repo: Repository<Skill>) {
    super(repo, SkillUniqueFields);
  }
}
