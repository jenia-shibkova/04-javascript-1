const items = [1, 2, 3, 4, 5, 6];

function isEven(n) {return n % 2 == 0}

function partitionOn(pred, items) {
  const fValue = items.filter(item => !pred(item));
  const tValue = items.filter(item => pred(item));

  items.length = 0;
  items.push(...fValue);
  items.push(...tValue);

  return fValue.length;
}

const result = partitionOn(isEven, items);
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3

console.log(result);