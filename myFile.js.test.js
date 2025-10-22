import { Sum, Substract, fetchData } from "./myFile";

// 1) Unit Test of a Function
test("should be 5 ", () => {
  expect(Sum(3, 2)).toBe(5);
});

// 2) Matchers
// a).toBe()
test("should be 5", () => {
  expect(30 - 2).toBe(28);
});

// b).toEqual()
test("assigning object a new value", () => {
  const myObj = { one: 1 };
  myObj["two"] = 2;
  expect(myObj).toEqual({
    one: 1,
    two: 2,
  });
});

// c+d).toBeFalsy() + toBeTruthy()

test("is false", () => {
  const a = 2;
  const b = 5;
  expect(a === b).toBeFalsy();
});

//  e) toThrow()
test("should throw error for invalid input", () => {
  expect(() => {
    Substract("12", 2);
  }).toThrow();
});

// 3) Testing Asynchronous Code
// a)callback
test("the data should be water bottle", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("water bottle");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
