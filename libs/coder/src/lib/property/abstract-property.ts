import { ICodeProperty } from '../interface';
import { CommonPropertyOptions } from './options';

export class AbstractProperty<
  TPropertyOptions extends CommonPropertyOptions<any>
> implements ICodeProperty<TPropertyOptions>
{
  constructor(public readonly options: TPropertyOptions) {}

  comment() {
    if (this.options.comment) {
      return `// ${this.options.comment}\n`;
    }
    return '';
  }

  /**
   * @returns string
   */
  decorator(): string {
    return '';
  }

  /**
   * defaultValue returns empty string by default. Override to return the default value.
   * @returns
   */
  defaultValue(): string {
    return '';
  }

  /**
   * To modify propertyName override this method
   * @returns
   */
  propertyName(): string {
    return this.options.propertyName;
  }

  /**
   * When a property is required, place the '!' mark immediately after the property name; otherwise, use '?'.
   * @returns
   */
  requiredMark(): string {
    if (this.defaultValue()) {
      return ' = ';
    }
    const classType = this.options.classType;
    const isRequired = this.options.required;
    switch (classType) {
      case 'class':
        return isRequired ? '!:' : '?:';
      case 'interface':
      case 'type':
        return isRequired ? ':' : '?:';
      default:
        return '?:';
    }
  }

  /**
   * If the property type is incompatible with TypeScript types,
   * override this method to specify a suitable type mapping.
   * For instance, if the property type is 'integer', which TypeScript doesn't natively support,
   * you should override this method to return 'number' when the property type is 'integer'
   * @returns
   */
  propertyType() {
    if (this.defaultValue()) {
      return '';
    }

    const type = this.options.type;

    if (this.options.isArray) {
      return `${type}[]`;
    }
    return type;
  }

  /**
   * In most cases, you do not need to override this method.
   * @returns
   */
  code(): string {
    return `${this.comment()}${this.decorator()}${this.propertyName()}${this.requiredMark()}${this.propertyType()}${this.defaultValue()}`;
  }
}
