/* This is a continuation of 'higher_order_function_1.js`, 
 * where the content is the same function but rewritten as higher order function 
 * NOTE: Observe how higher order function allow plugging in customized steps among a set of standardized actions 
*/

/* ============ EXAMPLE 2: WITH HIGHER ORDER FUNCTION (RECEIVING FUNCTION AS PARAM) ============*/

// 1 - Define the individual steps;
function weighIngredients() {
  console.log("Weigh Ingredients");
}

function mix() {
  console.log("Mix Ingredients");
}

function letRest() {
  console.log("Let Rest Overnight");
}

function bake_180() {
  console.log("Bake @ 180");
}

function bake_240() {
  console.log("Bake @ 240");
}

// 2 -  Higher-order function that takes a custom last step
function make(lastStep, product) {
  console.log(`make${product}()`);
  weighIngredients();
  mix();
  letRest();
  lastStep();

}

// 3 - Create makeCake and makeMuffin using the higher-order function
function makeCake() {
  make(bake_180, 'cake');
}

function makeMuffin() {
  make(bake_240, 'muffin');
}

// 4 - Call the functions
makeCake();   // Output: Step A, Step B, Step C, Step D
makeMuffin(); // Output: Step Z, Step B, Step C, Step D
