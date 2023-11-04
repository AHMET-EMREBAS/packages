import { ReadRoleDto } from './dto';
import { Rest } from './imports';
import { Role } from './entity';

export const RoleEntityName = 'Role';
export const RoleViewName = 'Role';
export const RoleSingularPath = 'role';
export const RolePluralPath = 'roles';
export const RoleSingularViewPath = 'role-view';
export const RolePluralViewPath = 'roles-view';

export const RoleSearchables: (keyof Role)[] = [];
export const RoleUniqueFields: (keyof Role)[] = ['role'];
export const RoleViewSearchables: string[] = [];

export const RoleRest = new Rest(
  RoleEntityName,
  RoleSingularPath,
  RolePluralPath,
  ReadRoleDto
);
