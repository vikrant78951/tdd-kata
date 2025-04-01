// add function

export function add(numbers: string): number {
  if (numbers === "") return 0;

  const newArray = numbers.split(/,|\n/).map(Number);

  return newArray.reduce((sum: number, num: number) => sum + num, 0);
}
