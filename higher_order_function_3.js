/* ============ EXAMPLE 3: WITH HIGHER ORDER FUNCTION (RETURNING & RECEIVING A FUNCTION) ============*/
const numbers = [1, 2, 3, 4, 5];

// Higher-order function to map over the array and apply a transformation function
function mapArray(arr, transformFunc) {
  return arr.map(transformFunc);
}
// Higher-order function to filter the array based on a predicate function
function filterArray(arr, predicateFunc) {
  return arr.filter(predicateFunc);
}
// Higher-order function to reduce (or fold) the array into a single value
function reduceArray(arr, reduceFunc, initialValue) {
  return arr.reduce(reduceFunc, initialValue);
}
// Function to square a number
function square(x) {
  return x * x;
}
// Function to check if a number is even
function isEven(x) {
  return x % 2 === 0;
}
// Using higher-order functions to transform, filter, and reduce the array
const squaredNumbers = mapArray(numbers, square); // [1, 4, 9, 16, 25]
const evenNumbers = filterArray(squaredNumbers, isEven); // [4, 16]
const sumOfEvenNumbers = reduceArray(evenNumbers, (acc, curr) => acc + curr, 0); // 20
console.log(sumOfEvenNumbers); // Output: 20

