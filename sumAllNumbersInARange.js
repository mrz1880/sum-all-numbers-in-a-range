function sumAll(array) {
  validateArray(array);
  const sortedArray = sortArrayAsc(array);
  const consecutiveNumbers = generateSequentialArray(sortedArray[0], sortedArray[1]);
  const sumOfNumbersFromArray = addNumbersFromArray(consecutiveNumbers);
 return sumOfNumbersFromArray;
}

function sortArrayAsc(array) {
  return array.sort((a, b) => a - b);
}

function generateSequentialArray(start,end) {
  return [...Array(end - start + 1).keys()].map((index) => index + start);
}

function validateArray(array) {
   if (!Array.isArray(array)) {
    throw new Error("You must provide an array.");
  }
   if (array.length !== 2) {
     throw new Error("You must provide an array with 2 items.");
   }
}
function addNumbersFromArray(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

module.exports = { sumAll };
