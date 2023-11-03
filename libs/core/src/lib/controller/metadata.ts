import { kebabCase } from 'lodash';
import plural from 'pluralize';

export class ResourceMetadata {
  /**
   * View entity controller paths
   */
  public readonly singularViewPath: string;
  public readonly pluralViewPath: string;

  public readonly singularPath: string;
  public readonly pluralPath: string;

  /**
   * Class Name
   */
  public readonly entityName: string;
  public readonly viewEntityName: string;

  public readonly uniq: string[] = [];

  /**
   * Includes relation properties
   */
  public readonly viewSearchables: string[] = ['id'];

  /**
   * Only entity properties
   */
  public readonly searchables: string[] = ['id'];

  constructor(
    options: Pick<
      ResourceMetadata,
      'entityName' | 'searchables' | 'viewSearchables' | 'uniq'
    >
  ) {
    const { entityName, uniq, viewSearchables, searchables } = options;

    this.entityName = entityName;
    this.viewEntityName = this.entityName + 'View';

    this.singularPath = `${kebabCase(entityName)}`;
    this.pluralPath = `${plural(this.singularPath)}`;

    this.singularViewPath = `${this.singularPath}-view`;
    this.pluralViewPath = `${this.pluralPath}-view`;
    this.uniq = uniq;
    this.viewSearchables = viewSearchables;
    this.searchables = searchables;
  }
}
