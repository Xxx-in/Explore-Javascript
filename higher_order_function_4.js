/* Higher order functions is commonly used for passing in callback function to perform certain action for method is done
* 
* Array iterator function - Map, reduce, filter
*/
/* ============ COMMON HIGHER ORDER FUNCTION  ============*/

let array = [1, 2, 3, 4];

// map(array);
// reduce(array);
filter(array);

// Array iterator functions must return operation to be done on current iterator item, else resultant array is undefined
// Immutable: does not alter array that it is acting on
// Commented code within function as input param = causes error / unintended behavior
// All array iterator function takes in a callback function -> must `return      ` stg  

// 1 - map(): Perform operation on each element of array
function map(array) {
  console.log(`map_array(): ${array}`);
  let map_result = array.map((item) => {
    console.log(`map_item: ${item}`);
    // item * 2;
    return item * 2;
  });
  console.log(`map_array(): ${array}`);
  console.log(`map_result(): ${map_result}`);
}

// 2 - reduce(): Recursion on accumulator vs next element
function reduce(array) {
  console.log(`reduce_array(): ${array}`);
  let reduce_result = array.reduce((acc, item) => {
    console.log(`reduce_item: ${item}`);
    // return acc + item;
    // return item * 2;
    return acc = acc + (item * 2);

  });
  console.log(`reduce_array(): ${array}`);
  console.log(`reduce_result(): ${reduce_result}`);
}


// 3 - filter(): Pass in a conditional filter function to return remaining element that is true for condition
function filter(array) {
  console.log(`map_array(): ${array}`);
  let map_result = array.filter((item) => {
    console.log(`map_item: ${item}`);
    // item > 2;
    return item > 2;
  });
  console.log(`map_array(): ${array}`);
  console.log(`map_result(): ${map_result}`);
}
