function sumTwoSmallestNumbers(numbers) {  
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, current) => acc + current); 
}
  
sumTwoSmallestNumbers([19, 5, 42, 2, 77]); // 7