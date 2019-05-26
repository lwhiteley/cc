import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import isNumber from 'lodash/isNumber';
import inRange from 'lodash/inRange';
import find from 'lodash/find';
import get from 'lodash/get';
import filter from 'lodash/filter';
import { quickScore } from 'quick-score';

const countryData = require('../util/country-data');

export default {
  find: opts => {
    if (!isEmpty(opts) && isObject(opts)) {
      return find(countryData, opts);
    }
    return undefined;
  },
  nameIncludes: (name, opts) => {
    return filter(countryData, country => {
      let accuracyAccepted = get(opts, 'accuracy', 1);
      const countryName = get(country, 'name', '').toLowerCase();
      const nameToSearch = (name || '').toLowerCase();

      if (accuracyAccepted === 1) {
        return countryName.includes(nameToSearch);
      }

      accuracyAccepted =
        isNumber(accuracyAccepted) && inRange(accuracyAccepted, 0, 1)
          ? accuracyAccepted
          : 0.7;

      const accuracyScore = quickScore(countryName, nameToSearch);
      return accuracyScore >= accuracyAccepted;
    });
  },
  countries: countryData,
};
