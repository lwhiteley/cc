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

  it('should find list with multiple countries by using nameIncludes', () => {
    const result = cc.nameIncludes('us', { accuracy: 0.7 });
    const expected = [
      {
        alpha2: 'AU',
        alpha3: 'AUS',
        isoNumeric: '036',
        name: 'Australia',
      },
      {
        alpha2: 'AT',
        alpha3: 'AUT',
        isoNumeric: '040',
        name: 'Austria',
      },
      {
        alpha2: 'RU',
        alpha3: 'RUS',
        isoNumeric: '643',
        name: 'Russian Federation',
      },
      {
        alpha2: 'US',
        alpha3: 'USA',
        isoNumeric: '840',
        name: 'United States of America',
      },
      {
        alpha2: 'UM',
        alpha3: 'UMI',
        isoNumeric: '581',
        name: 'United States Minor Outlying Islands',
      },
      {
        alpha2: 'VI',
        alpha3: 'VIR',
        isoNumeric: '850',
        name: 'Virgin Islands, US',
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
