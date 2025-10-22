export function Sum(a, b) {
  return a + b;
}

export function Substract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input");
  }
  return a - b;
}

export function fetchData(callback) {
  setTimeout(() => {
    callback("water bottle");
  }, 1000);
}

export function fetchPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Peanut Butter"), 1000);
  });
}
