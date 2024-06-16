class Counter {
  constructor() {
    this.count = 0;
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.count++;
    console.log(`increment(): ${JSON.stringify(this)}`);
    console.log(this.count);
  }

  decrement() {
    this.count--;
    console.log(`decrement(): ${JSON.stringify(this)}`);
    console.log(this.count);
  }
}

const counter = new Counter();
/**  When passed function which did not .bind(this) as argument to callback, 
 *   `this` keyword within the function loses context 
 *     |_ `this`does not refer to class instance
*/
setTimeout(counter.increment, 1000);
setTimeout(counter.decrement, 1000); // Without binding, this would be undefined
setTimeout(counter.increment, 1000); // Note that previous decrement() function called does not act on this.;