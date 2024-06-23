/* Higher Order Function */
/*
*  Refers to function that either: 
* 1. Takes >=1  functions as arguments.
* 2. Returns a function as its result.
*
* Idea of Higher Order Function: To allow plugging in customized steps among a set of standardized actions
*/

/* ============ EXAMPLE 1 : WITHOUT HIGHER ORDER FUNCTION ============*/

// Define the individual steps

function bake_180() {
  console.log("Bake at 180"); // Step 4: Muffin
}

function bake_240() {
  console.log("Bake at 240"); // Step 4: Cake
}

function weighIngredients() {
  console.log("Weigh Ingredients"); // Step 1 (Common)
}

function mix() {
  console.log("Mix ingredients"); // Step 2 (Common)
}

function letRest() {
  console.log("Rest Overnight"); // Step 3 (Common)
}

// Define makeCake and makeMuffin with hardcoded steps
function makeCake() {
  console.log(`makeCake(): `);
  weighIngredients();
  mix();
  letRest();
  bake_180();
}

function makeMuffin() {
  console.log(`makeMuffin(): `);
  weighIngredients();
  mix();
  letRest();
  bake_240();
}

// Call the functions
makeCake();   // Output: Step A, Step B, Step C, Step D
makeMuffin(); // Output: Step Z, Step B, Step C, Step D
