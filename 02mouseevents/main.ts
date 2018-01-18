import {Observable} from "rxjs";

let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
    .map( function(e : MouseEvent) {
        return {
            x: e.clientX,
            y: e.clientY
        }
    })
    .filter( function(value) {
        return value.x < 500;
    })
    .delay(300);

source.subscribe(
  value => {
    circle.style.left = value.x.toString();
    circle.style.top = value.y.toString();
  },
  e => console.log(`error: ${e}`),
  () => console.log("complete")
);

