// Object iterator function
// Pre-defined function as for-loop wrapper to perform operation on individual elements within an array 

let array = ['Name', 'Maybelline', 'Age', '41'];
let json = { Name: "Henderick", Age: "45" };

// 1 - Map (array only)
// Function you pass should return a value of any type
let mapArray = array.map(function (element) { return element + ' (Mod)'; });
console.log(`\n------Map------`);
console.log(`mapArray: ${mapArray}`);

// 2nd param of .map() returns to index of element
console.log('\nExplore 2nd param of .map():');
const mapArray2 = [1, 4, 9, 16];
console.log('mapArray2: ' + mapArray2);
const mapArrayModified = mapArray2.map((element, index) => console.log(`element: ${element}, index: ${index}`));
console.log('mapArrayModified[0]:  ' + mapArrayModified[0]); // Array is empty since no value is returned from .map() callback function

// 2 - Filter (array only)
// Function you pass should end with a predicate to return a boolean value
// To determine if current iterator value will be included within resultant array
let filterArray = array.filter(function (element) { let string = element + '-filter'; return string.length >= 15; });
console.log(`\n------Filter------`);
console.log(`filterArray: ${filterArray}`);

// 3 - Reduce (Array & JSON)
// Function you pass should end with a predicate to return a boolean value
// Similar concept to recursion: acting upon callback value repeatedly
console.log(`\n-----Reduce------`);
let reduceArray = array.reduce(function (element, nextElement) { console.log(`Current element: ${element}`); let string = element + '~\n'; return string + nextElement; });
console.log(`reduceArray: ${reduceArray}`);
// 3.1 - Note: handle off-by-1 error by looping index[0] - index[n-1] -> see current element


// 3.2 - Edge cases when array has length = 1 , length = 0
console.log(`\n********Edge Cases of Reduce()**********`);
// 3.2A - When array size == 0
let arraySize0 = [];
let reduceArray_size0 = arraySize0.reduce(function (element, nextElement) { console.log(`Current element: ${element}`); let string = element + '~\n'; return string + nextElement; }, 'Empty array detected');
console.log(`reduceArray_size0: ${reduceArray_size0}`);
// let reduceArray_size0 = arraySize0.reduce(function (element, nextElement) { console.log(`Current element: ${element}`); let string = element + '~\n'; return string + nextElement; }); 
// |_ Error when acting on size 0 array: Reduce of empty array with no initial value
// Need to provide 2nd param (after function) to input function as initial value returned when empty array; else error when pass empty array 

let arraySize1 = [1];
let reduceArray_size1 = arraySize1.reduce(function (element, nextElement) { console.log(`Current element: ${element}`); let string = element + '~\n'; return string + nextElement; }, 'Only 1 element');
console.log(`reduceArray_size1: ${reduceArray_size1}`);
//  After putting initial value, the input param of first function call will be having (iteratorVar = initialValue, iterator+1Val = array[0])

// 4 - Arrow function syntax
// implicitly return the expression right after =>, `return` statement not needed if inner function is a one-liner.
// Use { } when you want to return multi-line code
// Require `return` keyword if there is { } after => 
let arrowSyntaxArr1 = array.filter(element => { let string = element + '-arrSyntax1'; return string.length >= 15; });
let arrowSyntaxArr2 = array.filter(element => element + '-arrSyntax2');










/** Note: Index(Order) based iteration for map() && filter() -> does not work for JSON. **/
// let mapJson = json.map(function (element) { return element + '(Mod)'; });
// console.log(`mapJSON: ${JSON.stringify(mapJson)}`);
// let filterJson = json.filter(function (element) { let string = element + '-filter'; return string.length >= 15; });
// console.log(`filterJSON: ${JSON.stringify(filterJson)}`);