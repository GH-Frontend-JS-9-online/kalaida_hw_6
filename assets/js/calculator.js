let result = document.querySelector('#result');

function sumFunc() {
  let number1 = parseInt(document.querySelector('#number1').value),
    number2 = parseInt(document.querySelector('#number2').value),
    res;
  res = number1 + number2;
  if(isNaN(res)) {
    res = 'Введите пожалуйста цифру'
  }
  result.value = res;
}

function minusFunc() {
  let number1 = parseInt(document.querySelector('#number1').value),
    number2 = parseInt(document.querySelector('#number2').value),
    res;
  res = number1 - number2;
  if(isNaN(res)) {
    res = 'Введите пожалуйста цифру'
  }
  result.value = res;
}

function multiplicationFunc() {
  let number1 = parseInt(document.querySelector('#number1').value),
    number2 = parseInt(document.querySelector('#number2').value),
    res;
  res = number1 * number2;
  if(isNaN(res)) {
    res = 'Введите пожалуйста цифру'
  }
  result.value = res;
}

function divideFunc() {
  let number1 = parseInt(document.querySelector('#number1').value),
    number2 = parseInt(document.querySelector('#number2').value),
    res;
  res = number1 / number2;
  if(number2 === 0) {
    res = 'На 0 делить нельзя';
  } else if(isNaN(res)) {
    res = 'Введите пожалуйста цифру'
  }
  result.value = res;
}

function exponentiationFunc() {
  let number1 = parseInt(document.querySelector('#number1').value),
    number2 = parseInt(document.querySelector('#number2').value),
    res;
  res = number1 ** number2;
  if(isNaN(res)) {
    res = 'Введите пожалуйста цифру'
  }
  result.value = res;
}

function remainderFunc() {
  let number1 = parseInt(document.querySelector('#number1').value),
    number2 = parseInt(document.querySelector('#number2').value),
    res;
  res = number1 / number2;
  if(number2 === 0) {
    res = 'На 0 делить нельзя';
  } else if(isNaN(res)) {
    res = 'Введите пожалуйста цифру'
  }
  result.value = res;
}

document.querySelector('#plus').addEventListener('click', sumFunc);

document.querySelector('#minus').addEventListener('click', minusFunc);

document.querySelector('#multiplication').addEventListener('click', multiplicationFunc);

document.querySelector('#divide').addEventListener('click', divideFunc);

document.querySelector('#exponentiation').addEventListener('click', exponentiationFunc);

document.querySelector('#remainder').addEventListener('click', remainderFunc);
