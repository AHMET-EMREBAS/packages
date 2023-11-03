import { ReadRoleDto } from './dto';
import { Rest } from './imports';

export const RoleEntityName = 'Role';
export const RoleViewName = 'Role';
export const RoleSingularPath = 'role';
export const RolePluralPath = 'roles';
export const RoleSingularViewPath = 'role-view';
export const RolePluralViewPath = 'roles-view';

export const RoleSearchables: string[] = [];
export const RoleUniqueFields: string[] = [];
export const RoleViewSearchables: string[] = [];

export const RoleRest = new Rest(
  RoleEntityName,
  RoleSingularPath,
  RolePluralPath,
  ReadRoleDto
);
