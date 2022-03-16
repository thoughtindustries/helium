import { SORT_DELIMITER } from './constants';
import { Sort } from './types';

const truthyFilter = <T>(x: T | false | undefined | '' | 0): x is T => !!x;

const serializeSort = (sort: Sort | string): string => {
  if (typeof sort === 'string') {
    return sort;
  }
  const { field, direction } = sort;
  return [field, direction].filter(truthyFilter).join(SORT_DELIMITER);
};

export default serializeSort;
