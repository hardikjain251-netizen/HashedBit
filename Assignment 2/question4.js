/* -----------------------------------------------------------
   Q4. Given two numbers n1 and n2, find the sum of the
   products of their corresponding digits.
   ----------------------------------------------------------- */
function sumOfDigitProducts(n1, n2) {
  let str1 = String(n1);
  let str2 = String(n2);
 
  const maxLength = Math.max(str1.length, str2.length);
  str1 = str1.padStart(maxLength, "0");
  str2 = str2.padStart(maxLength, "0");
 
  let sum = 0;
 
  for (let i = 0; i < maxLength; i++) {
    const digit1 = Number(str1[i]);
    const digit2 = Number(str2[i]);
    sum += digit1 * digit2;
  }
 
  return sum;
}