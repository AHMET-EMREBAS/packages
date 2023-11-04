import { Decorator } from '../decorator';
import { Import } from '../import';
import { ClassProperty } from '../property/class-property';
import { AbstractClass } from './abstract-class';
describe('AbstractClass', () => {
  it('should print expected', () => {
    const code = new AbstractClass(
      {
        className: 'A',
        classType: 'class',
        comment: '',
        properties: [
          new ClassProperty({
            type: 'string',
            classType: 'class',
            propertyName: 'name',
          }),
          new ClassProperty({
            type: 'string',
            classType: 'class',
            propertyName: 'some',
          }),
        ],
      },
      [new Import({ items: ['Category'], packagePath: '@techbir/res' })],
      [new Decorator({ decoratorName: 'Entity' })],
      ['B'],
      ['C']
    ).code();

    expect(code).toBe(
      [
        `import { Category } from '@techbir/res'`,
        '',
        `@Entity()`,
        `export class A extends B implements C {\nname?:string\nsome?:string\n}`,
      ].join('\n')
    );
  });
});
