// This is covered as a part from UOH Tutorial Part1

/* Execute: node ./JS_rest_spread_destructure.js */
// This file is explores: 
// 1 - ... operator Rest operator
// 2 - ... operator as Spread operator
// 3  - Destructuring
// 4 - Destructuring used along with ... Spread operator

/* ========================= APP COMMAND INTERFACE ====================================================================== */
let jsonObj = { name: "Alisa", age: 24, country: "England", gender: "Female" };
let array = [1, 2, 3, 4, 5];

// 1 - ... as Rest operator
// printRestParams(1, 2, 3, 4, 5);
// printRestParams({ name: "Angela" }, { name: "Bosco" }, { name: "Cassandra" }, { name: "Leia" });

// 2 - ... as Spread operator
// spreadIterable(array);
// spreadIterable("Hello");
// spreadIterable(jsonObj); // JSON is not built-in iterable, cannot use spread

// 3 - Destructure
// destructure(array);
// destructure(jsonObj);

// 4 - Destructure + Spread
// printSpreadParam(array);
// printSpreadParam(jsonObj);

// Extra
equivalentSpreadSyntax();

/* ========================= 1-  ... AS REST OPERATOR ====================================================================== */
// Purpose: To gather the multiple remaining parameters into an array.
// Only used in function parameters 
function printRestParams(param1, param2, ...restParams) {
  console.log(`----- Enter printRestParams----- `);
  console.log(`restParams: ${JSON.stringify(restParams)}`);
  console.log(`typeof(restParams) ${typeof (restParams)}`); // NOTE: In JS, Array is a type of object
  restParams.forEach(element => {
    console.log(JSON.stringify(element));
  });
  console.log(`restParams[0]: ${JSON.stringify(restParams[0])}`);
}
/* ========================= 2 -  ... AS SPREAD OPERATOR ====================================================================== */
// Purpose: To expand iterables into individual elements
function spreadIterable(iterable) {
  console.log(`'.........Enter spreadIterable.........`);
  console.log(...iterable);
  console.log(modifySpreadedElement_1(...iterable)); // == modifySpreadedElement("H", "e", "l", "l", "o")
  console.log(modifySpreadedElement_2(...iterable));

  function modifySpreadedElement_1(item) { // function only receive 1 element, the rest is ignored
    return item + "!";
  }
  function modifySpreadedElement_2(item1, item2) { // function only receive 1 element, the rest is ignored
    return item1 + "!" + item2 + "!";
  }
}
/* ========================= 3 - DESTRUCTURE =============================================================== */
// Purpose: 
// For Array - Extract element based on sequential order
// For JSON - Extract specific key-value pairs within JSON Object based on given key name 
function destructure(iterable) {
  console.log(`********** Enter iterable ********** `);
  let isArray = Array.isArray(iterable);
  console.log(`isArray: ${isArray} `);
  if (isArray) {
    console.log("Destructure Array");
    console.log(`Array: ${iterable}`);
    const [first, second] = iterable;
    console.log(`first: ${first}\nsecond: ${second} `);
  }
  else {
    console.log("Destructure JSON Object");
    // Extracted elements must be corresponding names of keys, else variable = undefined
    let keys = Object.keys(jsonObj);
    console.log(`keys: ${keys} \n keys[0]: ${keys[0]} \n keys[1]: ${keys[1]} `);
    // let { keys[0], keys[1], randomString} = iterable; -> cannot work
    // Computed value is not directly recognized as valid key identifier in object destructuring
    // Use square brackets to compute the property names dynamically during the destructuring assignment.
    let { [keys[0]]: first, [keys[1]]: second, country, randomString } = iterable;
    console.log(`Destructure by key: \nfirst: ${first} \nsecond: ${second} \ncountry: ${country} \nrandomString: ${randomString} `);
  }
}

/* ======================= 4 - DESTRUCTURE + SPREAD OPERATOR =============================================================== */
/** 
  Destructuring is often used with Spread operator
  When destructuring, we use spread operator to describe the pattern of remaining individual elements to be extracted
**/

// Purpose: used to grabbing the remaining section as individual elements within an interable after destructured
// Can be used in various context: JSON objects, arrays, function params
// After grabbing, can only do reassignment and/or concatenation
// When using spread operator to grab subsection, the ... operator must be the last element in the pattern
function printSpreadParam(spreadParam) {
  console.log(`===== Enter printSpreadParams ===== `);
  let isArray = Array.isArray(spreadParam);
  console.log(`isArray: ${isArray} `);

  if (isArray) {
    /* ARRAY */
    console.log("printSpreadParam -> Array");
    // destructure + grab partial section & reassign
    let [first, second, ...remaining] = spreadParam;
    console.log(`first: ${first} \n second: ${second} \n remaining: ${remaining} \nremaining[0]: ${remaining[0]} `);
    // concat
    // concatArray will be [a,b,c,a,b,c] instead of [[a,b,c], [a,b,c]]
    // since ... operator spreads the elements of the nested array as separate elements before forming new array
    let concatArray = [...remaining, ...remaining];
    console.log(`concatArray: ${concatArray} \n concatArray: ${concatArray[0]} `);
  }
  else {
    /* JSON OBJECT*/
    console.log("printSpreadParam -> JSON Object");
    // destructure + grab partial section & reassign
    // For JSON obj, spread operator grabs whatever that is remaining after destructure by key instead of order
    let { name, age, third, ...remaining } = spreadParam;
    console.log(`Extracted: ${JSON.stringify(name)} \n Extracted: ${JSON.stringify(age)} \n Extracted: ${JSON.stringify(third)} \n Extracted: ${JSON.stringify(remaining)} `);
    // concat
    let concatObj = { ...remaining, ...remaining };
    console.log(`concatObj: ${JSON.stringify(concatObj)}, \nconcatObj.country: ${concatObj.country} `); // Note: concatObj === remaining, since JSON object cannot have duplicate key (override value) 
    let concatObj2 = { ...remaining, key_X: "x", key_Y: "y" };
    console.log(`concatObj2: ${JSON.stringify(concatObj2)}, \nconcatObj2.country: ${concatObj2.country} `);
  }
}

// { name: "Pierre", age: 12, country: "France", gender: "Male" } === {...jsonObj}
function equivalentSpreadSyntax() {
  let json = { name: "Pierre", age: 12, country: "France", gender: "Male" };
  var { name, age } = { ...json };
  console.log(`Check equivalent spread operator when assignment #1\n name:${name}, age:${age} `);
  var { name, age } = json;
  console.log(`Check equivalent spread operator when assignment #1\n name:${name}, age:${age} `);
}
