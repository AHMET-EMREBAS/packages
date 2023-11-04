import { AbstractProperty } from './abstract-property';

describe('AbstractProperty', () => {
  it('should print property defination', () => {
    const ap = new AbstractProperty({
      classType: 'class',
      propertyName: 'xyz',
      required: true,
      type: 'string',
      comment: 'Hello world',
    });
    expect(ap.code()).toBe(`// Hello world\nxyz!:string`);
  });
});
