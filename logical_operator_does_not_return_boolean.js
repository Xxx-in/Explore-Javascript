// Logical operator does return boolean
// Logical operators (&&, ||, !) generally return the value of one of the operands, rather than strictly returning a boolean result. 

// 1 - &&
console.log(`------- && ------`);
let andResult;
let string = "Hello";
let num = 12;
andResult = string && num;
console.log(`${string} && ${num}: ${andResult}`);
andResult = num && string;
console.log(`${num} && ${string}: ${andResult}`);

// 2 - ||
console.log(`------- || ------`);
let orResult;
orResult = string || num;
console.log(`${string} || ${num}: ${andResult}`);
orResult = num || string;
console.log(`${num} || ${string}: ${andResult}`)

