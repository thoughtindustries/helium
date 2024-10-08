import { SortDirection, SortField } from '../..';
import { SORT_DELIMITER } from './constants';
import { Sort } from './types';

const parseSort = (sort: string): Sort | undefined => {
  if (!sort) {
    return;
  }

  const splitSort = sort.split(SORT_DELIMITER);

  if (!splitSort.length) {
    return;
  }

  const field = splitSort[0] as SortField;

  if (!field) {
    return;
  }

  const direction = splitSort.length > 1 ? (splitSort[1] as SortDirection) : undefined;

  return {
    field,
    direction
  };
};

export default parseSort;
