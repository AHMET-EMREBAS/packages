import { Decorator } from '../decorator';
import { ClassProperty } from './class-property';

describe('ClassProperty', () => {
  describe('Basic', () => {
    it.each`
      expected                         | type         | classType  | propertyName | defaultValue     | isArray  | required | comment
      ${'name!:string'}                | ${'string'}  | ${'class'} | ${'name'}    | ${undefined}     | ${false} | ${true}  | ${''}
      ${'name!:string'}                | ${'string'}  | ${'class'} | ${'name'}    | ${undefined}     | ${false} | ${true}  | ${''}
      ${'name!:number'}                | ${'number'}  | ${'class'} | ${'name'}    | ${undefined}     | ${false} | ${true}  | ${''}
      ${'name!:boolean'}               | ${'boolean'} | ${'class'} | ${'name'}    | ${undefined}     | ${false} | ${true}  | ${''}
      ${'name!:Date'}                  | ${'Date'}    | ${'class'} | ${'name'}    | ${undefined}     | ${false} | ${true}  | ${''}
      ${'// c\nname!:string'}          | ${'string'}  | ${'class'} | ${'name'}    | ${undefined}     | ${false} | ${true}  | ${'c'}
      ${"name = 'default'"}            | ${'string'}  | ${'class'} | ${'name'}    | ${'default'}     | ${false} | ${false} | ${''}
      ${'count = 1'}                   | ${'number'}  | ${'class'} | ${'count'}   | ${1}             | ${false} | ${false} | ${''}
      ${'// Is Active\nactive = true'} | ${'boolean'} | ${'class'} | ${'active'}  | ${true}          | ${false} | ${true}  | ${'Is Active'}
      ${'name!:string[]'}              | ${'string'}  | ${'class'} | ${'name'}    | ${undefined}     | ${true}  | ${true}  | ${''}
      ${"name = [ 'a', 'b' ]"}         | ${'string'}  | ${'class'} | ${'name'}    | ${['a', 'b']}    | ${true}  | ${true}  | ${''}
      ${'name = [ 1, 2 ]'}             | ${'number'}  | ${'class'} | ${'name'}    | ${[1, 2]}        | ${true}  | ${true}  | ${''}
      ${'name = [ true, false ]'}      | ${'boolean'} | ${'class'} | ${'name'}    | ${[true, false]} | ${true}  | ${true}  | ${''}
      ${'date!:Date[]'}                | ${'Date'}    | ${'class'} | ${'date'}    | ${undefined}     | ${true}  | ${true}  | ${''}
    `(
      'should return $expected',
      ({
        type,
        classType,
        propertyName,
        required,
        comment,
        defaultValue,
        isArray,
        expected,
      }) => {
        const code = new ClassProperty<'string', string, any>({
          type,
          classType,
          propertyName,
          required,
          comment,
          defaultValue,
          isArray,
        }).code();

        expect(code).toBe(expected);
      }
    );
  });

  describe('With Decorators', () => {
    it('should print the property with decorators', () => {
      const decorator = new Decorator({
        decoratorName: 'Property',
        options: { type: 'string' },
      });

      const code = new ClassProperty(
        {
          type: 'string',
          classType: 'class',
          propertyName: 'name',
          required: false,
        },
        [decorator]
      ).code();

      expect(code).toBe(`@Property({ type: 'string' })\nname?:string`);
    });
  });
});
