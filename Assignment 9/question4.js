const array = [1, 2, 3, 4, 5];
 
function squareAll(arr) {
  return arr.map((num) => num * num);
}

console.log("Original array:", array);
console.log("Squared array:", squareAll(array));
console.log("Original array is unchanged:", array);