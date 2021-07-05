// Написать функцию которая принимает любое число и 
// возвращает число в формате ХХ.ХХ, 
// согласно правилам математики

const numObj = 12345.6789;

function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(numObj); 