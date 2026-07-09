/* -----------------------------------------------------------
   Q8. Repeated digit sum until a single digit remains
   (this is known as the "digital root").
   ----------------------------------------------------------- */
function digitalRoot(number) {
  let num = number;
  while (num >= 10) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
      sum += temp % 10;       // last digit
      temp = Math.floor(temp / 10); // remove last digit
    }
    num = sum;
  }
 
  return num;
}