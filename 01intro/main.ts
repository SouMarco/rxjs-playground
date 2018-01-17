import {Observable, Observer} from "rxjs";

let numbers = [1, 5, 10];

/**
 * OPTION 1 observable implementation
 */
// let source = Observable.from(numbers);

/**
 * OPTION 2 observable implementation
 */
let source = Observable.create(observer => {
  
  let index = 0;
  let produceValue = () => {
    observer.next(numbers[index++]);

    if(index < numbers.length ) {
      setTimeout(produceValue, 200);
    } else {
      observer.complete();
    }
  }

  produceValue();
})
  .map(n => n * 2 )
  .filter(n => n > 4)
  ;
/**
 * OPTION 1 observer implementation
 */
// class MyObserver implements Observer<number>{
//   next(value) {
//     console.log(`value is ${value}`);
//   }

//   error(e) {
//     console.log(`error is ${e}`);
//   }

//   complete() {
//     console.log("complete");
//   }
// }

// source.subscribe(new MyObserver);

/**
 * OPTION 2 observer implementation
 */
source.subscribe(
  value => console.log(`value is ${value}`),
  e => console.log(`error is ${e}`),
  () => console.log("complete")
);


