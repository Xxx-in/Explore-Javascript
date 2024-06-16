/** What is hoisting: When processing code, variable declaration is brought up ahead by compiler
 * |_ Effect: Can access variable even though variable is sequentially declared latter
*/


// 1- Hoisting with variable declaration - only variable declared with `var` is hoisted
console.log(`======== Hoisting declared variables ==========`);

console.log(a);
console.log(typeof (a));

/* ReferenceError: Cannot access before initialization */
// console.log(b);
// console.log(typeof (b));

// console.log(c);
// console.log(typeof (c));

var a = 1;
let b = 2;
const c = 3;

// 2 - Hoisting only brings up variable declaration, not assignment 

console.log(`======== Hoisting only brings up declaration, not assignment ==========`);

console.log(a);
console.log(typeof (a));
var a = 24;
/* Note that variable can be accessed instead of throwing ReferenceError
 * However, value is undefined instead of 24
 * Declaration is hoisted, but assignment is not
 *  */

// 3 - Hoisting with function definition
console.log(`======== Hoisting only brings up declaration, not assignment ==========`);
// expressionFn('BEFORE');
// arrowFn('BEFORE');
declareFn('BEFORE'); 

function declareFn(name) {
  console.log(name);
}

let expressionFn = function (name) {
  console.log(`arrowFn(): ${name}`);
};

let arrowFn = function (name) {
  console.log(`arrowFn(): ${name}`);
};

/** Only function declared with function declaration method is hoisted
 * Others are treated as assignments to variables
 */