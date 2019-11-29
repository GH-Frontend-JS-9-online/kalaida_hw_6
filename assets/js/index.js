//1. Find in array: sum, min and max, replace min and max - create custom functions

Array.prototype.mySum = function () {
  let mySum = 0;
  for(let i = 0; i < this.length; i++) {
    mySum += this[i];
  }
  return mySum;
};

Array.prototype.myMax = function() {
  let myMax = this[0];
  for(let i = 0; i < this.length; i++) {
    if(myMax < this[i]) {
      myMax = this[i]
    }
  }
  return myMax;
};

Array.prototype.myMin = function() {
  let myMin = this[0];
  for(let i = 0; i < this.length; i++) {
    if(myMin > this[i]) {
      myMin = this[i];
    }
  }
  return myMin;
};

Array.prototype.replaceMinMax = function() {
  let myMax = this.myMin(),
    myMin = this.myMax();
  return 'Replaced max number = ' + myMax + '; ' + 'Replaced min number = ' + myMin;
};

console.log('array.mySum() - return sum');
console.log('array.myMax() - return max');
console.log('array.myMin() - return min');
console.log('array.replaceMinMax() - replace min number and max number');

//2. Create function which will return function with callback in arguments
//3. Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.
//4. Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.
//5. Advanced tasks (optional):
// - Create calculator.