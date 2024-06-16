// expressionFn('BEFORE');
// arrowFn('BEFORE');
declareFn('BEFORE'); // only function declaration can be hoisted

// 1 - Function Expression
let expressionFn = function (name) {
  console.log(`arrowFn(): ${name}`);
  // console.log(this);
};

// 2 - Arrow function
let arrowFn = function (name) {
  console.log(`arrowFn(): ${name}`);
  // console.log(this);
};

// Function declaration: Declares function
function declareFn(name) {
  console.log(name); // `this` depends on how `a` is called
  // console.log(this);
}
// Can be hoisted;
// Have `this` context
// have `arguments` object
// Can be used as cosntructors

expressionFn('AFTER');
arrowFn('AFTER');
declareFn('AFTER');

typeof (expressionFn);
typeof (arrowFn);
typeof (declareFn);
