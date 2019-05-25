const cc = require('../dist/index.js');

describe('es5 dist', () => {
  it('should find algeria with object lookup', () => {
    const result = cc.find({ name: 'Algeria' });
    const expected = {
      name: 'Algeria',
      alpha2: 'DZ',
      alpha3: 'DZA',
      isoNumeric: '012',
    };
    expect(result).toEqual(expected);
  });

  it('should find list with Trinidad by using nameIncludes', () => {
    const result = cc.nameIncludes('Trinidad');
    const expected = [
      {
        name: 'Trinidad and Tobago',
        alpha2: 'TT',
        alpha3: 'TTO',
        isoNumeric: '780',
      },
    ];
    expect(result).toEqual(expected);
  });

  it('test getting all values', () => {
    expect(cc.countries.GBR.name).toEqual('United Kingdom');
    expect(cc.countries.GBR.alpha2).toEqual('GB');
    expect(cc.countries.GBR.alpha3).toEqual('GBR');
    expect(cc.countries.GBR.isoNumeric).toEqual('826');
  });
});
