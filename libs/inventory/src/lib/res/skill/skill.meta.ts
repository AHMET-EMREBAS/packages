import { ReadSkillDto } from './dto';
import { Rest } from './imports';

export const SkillEntityName = 'Skill';
export const SkillViewName = 'Skill';
export const SkillSingularPath = 'skill';
export const SkillPluralPath = 'skills';
export const SkillSingularViewPath = 'skill-view';
export const SkillPluralViewPath = 'skills-view';

export const SkillSearchables: string[] = [];
export const SkillUniqueFields: string[] = [];
export const SkillViewSearchables: string[] = [];

export const SkillRest = new Rest(
  SkillEntityName,
  SkillSingularPath,
  SkillPluralPath,
  ReadSkillDto
);
