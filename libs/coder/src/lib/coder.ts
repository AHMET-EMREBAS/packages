export type PropertyType = 'string' | 'number' | 'boolean' | 'Date' | 'object';

export type PropertyOptions = {
  name: string;
  type: PropertyType;
  target: string;
  comment?: string;
  required?: boolean;
  isArray?: boolean;
  decoratorOptions: Record<string, any>;
  decorator?: string;
};

export class PropertyCoder {
  constructor(private readonly options: PropertyOptions) {}

  code() {
    return '';
  }
}

export class Coder {}
