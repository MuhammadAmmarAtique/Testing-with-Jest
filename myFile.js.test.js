import { jest } from "@jest/globals";
import { Sum, Substract, fetchData, fetchPromise } from "./myFile";

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
// b)promise
test("the data should be peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("Peanut Butter");
});

// c)async await
test("data should be peanut buutter", async () => {
  const data = await fetchPromise();
  expect(data).toBe("Peanut Butter");
});

// d)mock function
test("a basic mock function", () => {
  const mock = jest.fn((x) => x + 12); // using jest.fn() we craete mock function
  expect(mock(2)).toBe(14);
});

// e) spying
test("spying on method inside an object", () => {
  const myObj = {
    greet() {
      return true;
    },
  };

  const spy = jest.spyOn(myObj, "greet");

  myObj.greet();

  expect(spy).toHaveBeenCalled(); //check that it was called

  spy.mockRestore(); //remove the spy after test
});
