/** 1 - Arrow function inside a method: 
 * arrowFunction inherits this from the MyClass instance */
class MyClass {
  constructor() {
    console.log(`======= Init MyClass Object =======`);
    this.value = 42;
    this.regularFunction = function () {
      console.log(`Function Declaration(): ${this.value}`); // 'this' refers to the MyClass instance
    };
    this.arrowFunction = () => {
      console.log(`arrowFunction(): ${this.value}`); // 'this' lexically inherited from MyClass
    };
  }

  testMethods() {
    this.regularFunction(); // Logs 42
    this.arrowFunction(); // Logs 42
  }
}

const obj1 = new MyClass();
obj1.testMethods();

/** 12 - Arrow function in a callback:
 * arrowFunction inherits this from the MyClass instance */
function Outer() {
  console.log(`======= Init Outer Object =======`);

  this.value = 'outer';

  this.method = function () {
    setTimeout(function () {
      console.log(`Function Declaration(): ${this.value}`); // Function Declaration: 'this' refers to global or undefined in strict mode
    }, 1000);

    setTimeout(() => {
      console.log(`arrowFunction(): ${this.value}`); // Arrow Function 'this' refers to the Outer instance
    }, 1000);
  };
}

const obj2 = new Outer();
obj2.method();
