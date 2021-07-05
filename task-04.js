// Написать функцию которая принимает любое число и 
// возвращает число в формате ХХ.ХХ, 
// согласно правилам математики

const numObj = 12345.6789;

function formatNumber(num) {
  return num.toFixed(2);
}

function formatNumberWithPrecision(num, precision) {
  const power = Math.pow(10, precision || 0);
  return String(Math.round(num * power) / power);
}

formatNumber(numObj);
formatNumberWithPrecision(numObj, 2); 