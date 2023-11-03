
export class ProductMeta {
  /**
   * View entity controller paths
   */
  static readonly viewPath = 'view-product';
  static readonly basePath = 'product';
  static readonly entityName = 'Product';
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
