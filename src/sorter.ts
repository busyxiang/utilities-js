import { get } from 'lodash-es';

export const alphabeticalSort = <T>(field: string | ((data: T) => string)) => (
  itemA: T,
  itemB: T,
) => {
  const isStringField = typeof field === 'string';
  const nameA = isStringField ? get(itemA, field) : field(itemA);
  const nameB = isStringField ? get(itemB, field) : field(itemB);

  return nameA.localeCompare(nameB);
};
