import { sum } from "../sum";

//My First Test Case

test("should return the sum of two numbers", () => {
  const result = sum(5, 6);

  //Assertion
  expect(result).toBe(11);
});
