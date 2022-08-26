import { average } from './number';

describe('average', () => {
  test('it should return average value', () => {
    const aver = average(1, 2, 3);

    expect(aver).toBe(2);
  });

  test('it should return average value(spread array)', () => {
    const aver = average(...[1, 2, 3]);

    expect(aver).toBe(2);
  });
});
