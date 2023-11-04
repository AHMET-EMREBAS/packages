import { Decorator } from '../decorator';
import { Import } from '../import';
import { ICodeClass } from '../interface';
import { CommonClassOptions } from './options';

export class AbstractClass<TOptions extends CommonClassOptions>
  implements ICodeClass<TOptions>
{
  constructor(
    public readonly options: TOptions,
    public readonly imports?: Import[],
    public readonly decorators?: Decorator<any>[],
    public readonly extending?: string[],
    public readonly implementing?: string[]
  ) {}

  import(): string {
    if (this.imports) {
      return this.imports.map((e) => e.code()).join('\n') + '\n';
    }
    return '';
  }

  className(): string {
    const cType = this.options.classType;
    const cName = this.options.className;
    if (cType === 'type') {
      return `${cName} = `;
    }
    return cName;
  }

  classType(): string {
    const cType = this.options.classType;

    if (cType === 'class') {
      return cType;
    } else if (cType === 'interface') {
      return cType;
    } else if (cType === 'type') {
      return cType;
    }
    return cType;
  }

  decorator(): string {
    if (this.options.classType == 'class') {
      if (this.decorators) {
        return this.decorators.map((e) => e.code()).join('\n') + '\n';
      }
    }
    return '';
  }

  comment(): string {
    const vComment = this.options.comment;
    if (vComment) {
      return (
        `/**
        * ${vComment}
        */` + '\n'
      );
    }

    return '';
  }

  extends(): string {
    if (this.options.classType !== 'type') {
      if (this.extending?.length > 0) {
        const vValue = `extends ${this.extending.join(', ')}`;
        return vValue;
      }
    }
    return '';
  }

  impements(): string {
    if (this.options.classType !== 'type') {
      if (this.implementing?.length > 0) {
        const vValue = `implements ${this.implementing.join(', ')}`;
        return vValue;
      }
    }
    return '';
  }

  construct(): string {
    return '';
  }

  property(): string {
    const vValue = this.options.properties?.map((e) => e.code()).join('\n');
    return vValue + '\n';
  }

  code(): string {
    const part0 = [this.import(), this.comment(), this.decorator()]
      .filter((e) => e)
      .join('\n');

    const part1 = [
      this.classType(),
      this.className(),
      this.extends(),
      this.impements(),
    ]
      .filter((e) => e)
      .join(' ');

    const part2 = [this.construct(), this.property()].filter((e) => e);

    return `${part0}export ${part1} {\n${part2}}`;
  }
}
