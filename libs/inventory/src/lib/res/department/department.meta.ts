import { ReadDepartmentDto } from './dto';
import { Rest } from './imports';
import { Department } from './entity';

export const DepartmentEntityName = 'Department';
export const DepartmentViewName = 'Department';
export const DepartmentSingularPath = 'department';
export const DepartmentPluralPath = 'departments';
export const DepartmentSingularViewPath = 'department-view';
export const DepartmentPluralViewPath = 'departments-view';

export const DepartmentSearchables: (keyof Department)[] = [];
export const DepartmentUniqueFields: (keyof Department)[] = ['name'];
export const DepartmentViewSearchables: string[] = [];

export const DepartmentRest = new Rest(
  DepartmentEntityName,
  DepartmentSingularPath,
  DepartmentPluralPath,
  ReadDepartmentDto
);
