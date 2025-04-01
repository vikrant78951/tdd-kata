// add function

export function add(numbers: string): number {
  if (numbers === "") return 0;
  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.slice(2, numbers.indexOf("\n"));

    // extract delimeter
    delimiters = delimiterLine.split(/\[([^\]]+)]/).filter(Boolean);
    numbers = numbers.slice(numbers.indexOf("\n") + 1);
  }

  const delimiterRegex = new RegExp(`[${delimiters.join("")}]`, "g");

  const numArray = numbers.split(delimiterRegex).map(Number);

  const sum: number = numArray.reduce((sum, num) => sum + num, 0);
  return sum;
}

add("//[;][*]\n1;2*3");
