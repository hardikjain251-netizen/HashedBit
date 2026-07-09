/* -----------------------------------------------------------
   Q2. let str = 'I love my India'
   Expected output = 'India my love I'
   ----------------------------------------------------------- */
function reverseWordsOrder() {
   const str = "I love my India";
 
  const result = str.split(" ").reverse().join(" ");
 
  console.log("Input :", str);
  console.log("Output:", result);
}