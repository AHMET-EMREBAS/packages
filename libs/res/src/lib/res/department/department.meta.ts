export class DepartmentMeta {
  /**
   * View entity controller paths
   */
  static readonly viewPath = 'view-department';
  static readonly basePath = 'department';
  static readonly entityName = 'Department';
  static readonly uniq: string[] = [];

  /**
   * Includes relation properties
   */
  static readonly viewSearchables: string[] = ['id'];

  /**
   * Only entity properties
   */
  static readonly searchables: string[] = ['id'];
}
