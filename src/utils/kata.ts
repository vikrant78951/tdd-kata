// add function

export function add(numbers: string): number {
  if (numbers === "") return 0;

  const newArray: number[] = numbers.split(/,|\n/).map(Number);
  console.log(newArray);

  const sum: number = newArray.reduce((sum, num) => sum + num, 0);
  console.log(sum);
  return sum;
}

add("1,2,3");
