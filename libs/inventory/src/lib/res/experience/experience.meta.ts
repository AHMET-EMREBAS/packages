import { ReadExperienceDto } from './dto';
import { Rest } from './imports';

export const ExperienceEntityName = 'Experience';
export const ExperienceViewName = 'Experience';
export const ExperienceSingularPath = 'experience';
export const ExperiencePluralPath = 'experiences';
export const ExperienceSingularViewPath = 'experience-view';
export const ExperiencePluralViewPath = 'experiences-view';

export const ExperienceSearchables: string[] = [];
export const ExperienceUniqueFields: string[] = [];
export const ExperienceViewSearchables: string[] = [];

export const ExperienceRest = new Rest(
  ExperienceEntityName,
  ExperienceSingularPath,
  ExperiencePluralPath,
  ReadExperienceDto
);
