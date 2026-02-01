// Lexical Scope
function outer() {
  let msg = "outer";
  function inner() {
    console.log(msg);
  }
  inner();
}
outer();

// Hoisting
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

// 