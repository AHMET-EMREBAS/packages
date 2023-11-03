import { ReadAchievementDto } from './dto';
import { Rest } from './imports';

export const AchievementEntityName = 'Achievement';
export const AchievementViewName = 'Achievement';
export const AchievementSingularPath = 'achievement';
export const AchievementPluralPath = 'achievements';
export const AchievementSingularViewPath = 'achievement-view';
export const AchievementPluralViewPath = 'achievements-view';

export const AchievementSearchables: string[] = [];
export const AchievementUniqueFields: string[] = [];
export const AchievementViewSearchables: string[] = [];

export const AchievementRest = new Rest(
  AchievementEntityName,
  AchievementSingularPath,
  AchievementPluralPath,
  ReadAchievementDto
);
