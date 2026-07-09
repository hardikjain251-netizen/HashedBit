/* -----------------------------------------------------------
   Q6. inputArr = [1,2,3,9,10,7,5,4,3]
   answer = [9, 10, 7]
   Use array.filter, return numbers greater than 5.
   ----------------------------------------------------------- */
function filterGreaterThanFive() {
  const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
  const result = inputArr.filter((num) => num > 5);
 
  console.log("Input :", inputArr);
  console.log("Output:", result);
}