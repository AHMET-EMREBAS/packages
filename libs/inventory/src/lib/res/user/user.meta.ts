import { ReadUserDto } from './dto';
import { Rest } from './imports';
import { User } from './entity';

export const UserEntityName = 'User';
export const UserViewName = 'User';
export const UserSingularPath = 'user';
export const UserPluralPath = 'users';
export const UserSingularViewPath = 'user-view';
export const UserPluralViewPath = 'users-view';

export const UserSearchables: (keyof User)[] = [];
export const UserUniqueFields: (keyof User)[] = ['username'];
export const UserViewSearchables: string[] = [];

export const UserRest = new Rest(
  UserEntityName,
  UserSingularPath,
  UserPluralPath,
  ReadUserDto
);
