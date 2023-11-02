import { PropertyOptions } from './property-options';

export type ModelPrinterOptions = {
  name: string;
  modelType: 'dto' | 'entity' | 'interface';
  properties: PropertyOptions[];
};

export class ModelPrinter {
  constructor(private readonly options: ModelPrinterOptions) {}

  properties() {}

  relations() {}

  print() {
    return `export class ${this.options.name} { }`;
  }
}
