import { add, getCalledCount, resetCallCount } from "./kata";

describe("test string calculater kata", () => {
  beforeEach(() => {
    resetCallCount();
  });

  let res;

  test("return 0 for empty string", () => {
    res = add("");
    expect(res).toBe(0);
  });

  test("should sum by comma seperated string ", () => {
    res = add("1,2,3");
    expect(res).toBe(6);
  });

  test("should support new line delimeters ", () => {
    res = add("1\n2,3");
    expect(res).toBe(6);
  });

  test("should support dynamic delimeters ", () => {
    res = add("//[;][*]\n1;2*3");
    expect(res).toBe(6);
  });

  test("should handle multiple delimiters with length longer than one char  ", () => {
    res = add("//[;;][**]\n1;2*3");
    expect(res).toBe(6);
  });

  test("should throw error for negative number ", () => {
    expect(() => add("//[;][*]\n1;-2*3")).toThrow(
      "Negative numbers are not allowed: -2",
    );
  });

  test("throws an error for multiple negative numbers", () => {
    expect(() => add("-1,-2,-3")).toThrow(
      "Negative numbers are not allowed: -1, -2, -3",
    );
  });

  test("increments count with each call", () => {
    add("1");
    add("2");
    add("3");
    expect(getCalledCount()).toBe(3);
  });

  test("ignore number bigger then 1000", () => {
    res = add("1,2,1001");
    expect(res).toBe(3);
  });
});
