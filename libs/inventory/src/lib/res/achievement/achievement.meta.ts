import { ReadAchievementDto } from './dto';
import { Rest } from './imports';
import { Achievement } from './entity';

export const AchievementEntityName = 'Achievement';
export const AchievementViewName = 'Achievement';
export const AchievementSingularPath = 'achievement';
export const AchievementPluralPath = 'achievements';
export const AchievementSingularViewPath = 'achievement-view';
export const AchievementPluralViewPath = 'achievements-view';

export const AchievementSearchables: (keyof Achievement)[] = ['description'];
export const AchievementUniqueFields: (keyof Achievement)[] = [];
export const AchievementViewSearchables: string[] = ['firstName', 'lastName'];

export const AchievementRest = new Rest(
  AchievementEntityName,
  AchievementSingularPath,
  AchievementPluralPath,
  ReadAchievementDto
);
