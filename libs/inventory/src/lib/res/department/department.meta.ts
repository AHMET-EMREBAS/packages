import { ReadDepartmentDto } from './dto';
import { Rest } from './imports';

export const DepartmentEntityName = 'Department';
export const DepartmentViewName = 'Department';
export const DepartmentSingularPath = 'department';
export const DepartmentPluralPath = 'departments';
export const DepartmentSingularViewPath = 'department-view';
export const DepartmentPluralViewPath = 'departments-view';

export const DepartmentSearchables: string[] = [];
export const DepartmentUniqueFields: string[] = [];
export const DepartmentViewSearchables: string[] = [];

export const DepartmentRest = new Rest(
  DepartmentEntityName,
  DepartmentSingularPath,
  DepartmentPluralPath,
  ReadDepartmentDto
);
