/* Array .splice() vs .slice() */

// 1 - .splice()
// Purpose: Extract / Add / Remove && directly apply modification to ori array 
// Mutable -> directly affects array
// returns removed element
// .splice(startIndex, removeCountFromStart, addElement)

console.log('************** .splice() **************');

// 1.1 - Add element in between array
const months = ['Jan', 'March', 'April', 'June'];
let a = months.splice(1, 0, 'Feb'); // no remove = add in position
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]
console.log(a); // []


// 1.2 - Replace 1 element at index 4
let b = months.splice(4, 2, 'May'); // since .splice() start index  refers to last element, manage to remove 1 element only
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'May' ]
console.log(b); // [ 'June' ]

// 1.3 - Remove element only
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'May' ]
let d = months.splice(4, 2);
console.log(months);
console.log(d); // [ 'May' ]





// 2 - .slice()
// Purpose: Extract only without modifying ori array;
// .slice() extracts without replace
// Immutable -> extraction makes a shallow copy from initial array, array not modified
// returns extracted section

console.log('================== .slice() ==================');
let c = months.slice(0, 3);
console.log(months);
console.log(c);

