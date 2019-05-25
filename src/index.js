import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import find from 'lodash/find';
import get from 'lodash/get';
import filter from 'lodash/filter';

const countryData = require('../util/country-data');

export default {
  find: opts => {
    if (!isEmpty(opts) && isObject(opts)) {
      return find(countryData, opts);
    }
    return undefined;
  },
  nameIncludes: name => {
    return filter(countryData, country => {
      return get(country, 'name', '').includes(name || '');
    });
  },
  countries: countryData,
};
