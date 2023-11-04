import { ReadPermissionDto } from './dto';
import { Rest } from './imports';
import { Permission } from './entity';

export const PermissionEntityName = 'Permission';
export const PermissionViewName = 'Permission';
export const PermissionSingularPath = 'permission';
export const PermissionPluralPath = 'permissions';
export const PermissionSingularViewPath = 'permission-view';
export const PermissionPluralViewPath = 'permissions-view';

export const PermissionSearchables: (keyof Permission)[] = [];
export const PermissionUniqueFields: (keyof Permission)[] = ['permission'];
export const PermissionViewSearchables: string[] = [];

export const PermissionRest = new Rest(
  PermissionEntityName,
  PermissionSingularPath,
  PermissionPluralPath,
  ReadPermissionDto
);
