import { Decorator } from './decorator';

describe('Decorator', () => {
  it.each`
    expected                                                 | decoratorName | options
    ${'@Property({  })'}                                     | ${'Property'} | ${{}}
    ${'@Property({ type: 1 })'}                              | ${'Property'} | ${{ type: 1 }}
    ${"@Property({ type: '1' })"}                            | ${'Property'} | ${{ type: '1' }}
    ${"@Property({ type: 'some' })"}                         | ${'Property'} | ${{ type: 'some' }}
    ${"@Property({ type: 'a',minLength: 3,active: false })"} | ${'Property'} | ${{ type: 'a', minLength: 3, active: false }}
  `(
    'should return the expected value $expected',
    ({ expected, decoratorName, options }) => {
      const code = new Decorator({ decoratorName, options }).code();

      expect(code).toBe(expected);
    }
  );
});
