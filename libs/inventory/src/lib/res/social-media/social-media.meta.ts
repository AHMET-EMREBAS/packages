import { ReadSocialMediaDto } from './dto';
import { Rest } from './imports';
import { SocialMedia } from './entity';

export const SocialMediaEntityName = 'SocialMedia';
export const SocialMediaViewName = 'SocialMedia';
export const SocialMediaSingularPath = 'social-media';
export const SocialMediaPluralPath = 'social-medias';
export const SocialMediaSingularViewPath = 'social-media-view';
export const SocialMediaPluralViewPath = 'social-medias-view';

export const SocialMediaSearchables: (keyof SocialMedia)[] = [];
export const SocialMediaUniqueFields: (keyof SocialMedia)[] = ['link'];
export const SocialMediaViewSearchables: string[] = [];

export const SocialMediaRest = new Rest(
  SocialMediaEntityName,
  SocialMediaSingularPath,
  SocialMediaPluralPath,
  ReadSocialMediaDto
);
