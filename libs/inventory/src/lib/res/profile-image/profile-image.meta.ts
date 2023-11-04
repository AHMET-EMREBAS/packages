import { ReadProfileImageDto } from './dto';
import { Rest } from './imports';
import { ProfileImage } from './entity';

export const ProfileImageEntityName = 'ProfileImage';
export const ProfileImageViewName = 'ProfileImage';
export const ProfileImageSingularPath = 'profile-image';
export const ProfileImagePluralPath = 'profile-images';
export const ProfileImageSingularViewPath = 'profile-image-view';
export const ProfileImagePluralViewPath = 'profile-images-view';

export const ProfileImageSearchables: (keyof ProfileImage)[] = [];
export const ProfileImageUniqueFields: (keyof ProfileImage)[] = [];
export const ProfileImageViewSearchables: string[] = [];

export const ProfileImageRest = new Rest(
  ProfileImageEntityName,
  ProfileImageSingularPath,
  ProfileImagePluralPath,
  ReadProfileImageDto
);
