export const average = (...nums: number[]) => {
  return nums.reduce((acc, value) => acc + value, 0) / nums.length;
};
