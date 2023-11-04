import { ReadExperienceDto } from './dto';
import { Rest } from './imports';
import { Experience } from './entity';

export const ExperienceEntityName = 'Experience';
export const ExperienceViewName = 'Experience';
export const ExperienceSingularPath = 'experience';
export const ExperiencePluralPath = 'experiences';
export const ExperienceSingularViewPath = 'experience-view';
export const ExperiencePluralViewPath = 'experiences-view';

export const ExperienceSearchables: (keyof Experience)[] = [];
export const ExperienceUniqueFields: (keyof Experience)[] = [];
export const ExperienceViewSearchables: string[] = [];

export const ExperienceRest = new Rest(
  ExperienceEntityName,
  ExperienceSingularPath,
  ExperiencePluralPath,
  ReadExperienceDto
);
