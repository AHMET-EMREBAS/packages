export function CombinePropertyDecorators(
  ...decorators: PropertyDecorator[]
): PropertyDecorator {
  return (target: any, property: any) => {
    for (const d of decorators) {
      d(target, property);
    }
  };
}

export function CombineMethodDecorators(
  ...decorators: MethodDecorator[]
): MethodDecorator {
  return (target: any, property: any, descriptor: any) => {
    for (const d of decorators) {
      d(target, property, descriptor);
    }
  };
}

export function CombineClassDecorators(
  ...decorators: ClassDecorator[]
): ClassDecorator {
  return (target: any) => {
    for (const d of decorators) {
      d(target);
    }
  };
}
