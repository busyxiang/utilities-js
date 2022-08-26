export const reorder = <T>(
  arr: T[],
  startIndex: number,
  endIndex: number,
): T[] => {
  const result = Array.from(arr);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
