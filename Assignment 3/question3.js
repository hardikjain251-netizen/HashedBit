/* -----------------------------------------------------------
   Q3. let string = 'INDIA'
   Expected output = 'INDONESIA'
   Use array.splice
   ----------------------------------------------------------- */
function transformIndiaToIndonesia() {
  const string = "INDIA";

  const charArray = string.split("");

  charArray.splice(3, 0, "O", "N", "E", "S");
 
  const result = charArray.join("");
 
  console.log("Input :", string);
  console.log("Output:", result);
}