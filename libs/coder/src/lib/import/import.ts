import { ICode } from '../interface';
import { ImportOptions } from './options';

export class Import implements ICode {
  constructor(public readonly options: ImportOptions) {}

  code(): string {
    const items = [...new Set(this.options.items)];
    const packagePath = this.options.packagePath;
    return `import { ${items.join(', ')} } from '${packagePath}'`;
  }
}
