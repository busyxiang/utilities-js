import { alphabeticalSort } from './sorter';

describe('alphabeticalSort', () => {
  test('it should sort alphabetically', () => {
    const arrayToSort = [{ name: 'z' }, { name: 'a' }];

    arrayToSort.sort(alphabeticalSort('name'));

    expect(arrayToSort[0].name).toBe('a');
    expect(arrayToSort[1].name).toBe('z');
  });
});
