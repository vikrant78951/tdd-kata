import { add } from "./kata";

describe("test string calculater kata", () => {
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
});
