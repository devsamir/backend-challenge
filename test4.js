/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let objNum = numbers.reduce((acc, curr) => {
    acc[curr] = 1;
    return acc;
  }, {});
  for (let i = 0; i <= 9; i++) {
    if (!objNum[i]) return i;
  }
}

console.log(result(numbers));
