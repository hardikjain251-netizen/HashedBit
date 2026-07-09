/* -----------------------------------------------------------
   Q5. Function to replace a wrong word with the correct word
   in a sentence, using String.replace().
   correctfn(string, wrong, correct)
   ----------------------------------------------------------- */
function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}
 
function testCorrectfn() {
  const sentence = "I are going to school";
  const fixed = correctfn(sentence, "are", "am");
 
  console.log("Original :", sentence);
  console.log("Corrected:", fixed);
}