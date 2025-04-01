// global variables
let callCount = 0;

// add function
export function add(numbers: string): number {
  callCount++;
  if (numbers === "") return 0;
  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.slice(2, numbers.indexOf("\n"));

    // extract delimeter
    delimiters = delimiterLine.split(/\[([^\]]+)]/).filter(Boolean);
    numbers = numbers.slice(numbers.indexOf("\n") + 1);
  }

  const delimiterRegex = new RegExp(`[${delimiters.join("")}]`, "g");

  let numArray = numbers.split(delimiterRegex).map(Number);

  // validate negative  number
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers are not allowed: ${negatives.join(",")}`);
  }

  // ignore number bigger then 1000
  numArray = numArray.filter((num) => num < 1001);

  const sum: number = numArray.reduce((sum, num) => sum + num, 0);
  return sum;
}

export function getCalledCount(): number {
  return callCount;
}
export function resetCallCount() {
  callCount = 0;
}

add("1,2,1000");
