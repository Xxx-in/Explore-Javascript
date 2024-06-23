/* ============ EXAMPLE 3: WITH HIGHER ORDER FUNCTION (RETURNING A FUNCTION) ============*/

// Define specific multiplier functions manually
function multiplyBy2(x) {
  return x * 2;
}

function multiplyBy3(x) {
  return x * 3;
}

// Using the functions
console.log(multiplyBy2(5)); // Output: 10
console.log(multiplyBy3(5)); // Output: 15
