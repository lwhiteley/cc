import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import find from 'lodash/find';

const countryData = require('../util/country-data');

export default {
  find: opts => {
    if (!isEmpty(opts) && isObject(opts)) {
      return find(countryData, opts);
    }
    return undefined;
  },
  countries: countryData,
};
