import { add } from "./kata";

describe("test string calculater kata", () => {
  // test 0
  test("return 0 from an empty string", () => {
    const res = add("0");
    expect(res).toBe(0);
  });
  test("return 1 for value 1", () => {
    const res = add("1");
    expect(res).toBe(1);
  });

  test("returns sum for comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("returns sum for comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("supports newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
