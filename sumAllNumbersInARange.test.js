const { sumAll } = require("./sumAllNumbersInARange");
describe("Sum All Numbers in a Range", () => {
  it("sumAll() should throw an error", () => {
    const result = () => {
      sumAll();
    };
    expect(result).toThrow("You must provide an array.");
  });
  it("sumAll([]) should throw an error", () => {
    const result = () => {
      sumAll([]);
    };
    expect(result).toThrow("You must provide an array with 2 items.");
  });
it("sumAll([1, 2]) should return a number.", () => {
  const result = sumAll([1,4]);
  expect(result).toBeNumber();
});
it("sumAll([1, 2]) should return 3", () => {
  const result = sumAll([1, 2]);
  expect(result).toBe(3);
});
it("sumAll([2,1]) should return 3", () => {
  const result = sumAll([2,1]);
  expect(result).toBe(3);
});

});
