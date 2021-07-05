// Написать функцию которая принимает 3 аргумента: число1, оператор, число2
//  - применяет оператор к числу1 с аргументом число2
//  - возвращает результат, например calc(2, '*', 2) // 4
//  - не кидает исключения
//  - не возвращает NaN
//  - в случае неверных аргументов возвращает строку с описанием ошибки

function myCalc(num1, operator, num2) {  
  const operators = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '/': num1 / num2,
    '**': num1 ** num2
  }
  console.log(2 ** 3)
  if (num2 === 0) {
    return 'You cannot divide by zero.';
  }
  
  if (isNaN(num1) || isNaN(num2)) {
    return 'Arguments contain not a number.';
  }

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Arguments type is not a number.';
  }

  if (operators[operator]) {
    return operators[operator];
  } else {
    return 'Arguments has wrong operator.';
  }
}

myCalc(2, '*', 2); 
myCalc('10', '/', 5);
myCalc(10, '/', 5);
myCalc(10, '/', 0);
myCalc(NaN, '*', 2);
myCalc(2, '~', 2); 