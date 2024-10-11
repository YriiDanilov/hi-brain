function makeCounter(count) {

  return function() {
    return ++count;
  };
}

const counter = makeCounter(0);
const counter2 = makeCounter(0);

console.log(counter());
console.log(counter2());

console.log(counter());
console.log(counter2());

