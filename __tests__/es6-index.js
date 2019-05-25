const cc = require('./../src/index.js');

describe('es6 src', () => {
  it('test algeria lookup', () => {
    const result = cc.find({ name: 'Algeria' });
    const expected = {
      name: 'Algeria',
      alpha2: 'DZ',
      alpha3: 'DZA',
      isoNumeric: '012',
    };
    expect(result).toEqual(expected);
  });
  it('test getting all values', () => {
    expect(cc.countries.GBR.name).toEqual('United Kingdom');
    expect(cc.countries.GBR.alpha2).toEqual('GB');
    expect(cc.countries.GBR.alpha3).toEqual('GBR');
    expect(cc.countries.GBR.isoNumeric).toEqual('826');
  });
});
