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
console.log('myCallback(numbers)() - callback function that return sum');
console.log('foobar(numbers) - return foo, bar, foobar');
console.log('correspondStr(string1, string2) - correspond letters');

//2. Create function which will return function with callback in arguments
function myCallback(...args) {
  return function() {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }
}
//3. Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.
function foobar(...args) {
  for(let i = 0; i < args.length; i++) {
    if((args[i] % 3 === 0) && (args[i] % 7 === 0)) {
      args[i] = 'foobar';
    }
    if(args[i] % 3 === 0) {
      args[i] = 'foo';
    }
    if(args[i] % 7 === 0) {
      args[i] = 'bar';
    }
  }
   return args;
}

//4. Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.
function correspondStr(text1, text2) {

  let correspondArr = [],
    letters;

  if(text1.length > text2.length) {
    letters = text1.length;
  } else {
    letters = text2.length;
  }

  for(let i = 0; i < text1.length; i++) {
    for(let j = 0; j < text2.length; j++) {
      if(text1[i] === text2[j]) {
        correspondArr.push(text1[i]);
      }
    }
  }

  return (correspondArr.length / letters) * 100;
}

//5. Advanced tasks (optional):
// - Create calculator.

//calculator.js