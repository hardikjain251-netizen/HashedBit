/* -----------------------------------------------------------
   Q4. Take a string (min 20 characters). Count number of
   vowels and consonants in it.
   ----------------------------------------------------------- */
function countVowelsAndConsonants() {
 
  const text = "Summer Internship Under HashedBit";
 
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;
 
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    const isLetter = /[a-zA-Z]/.test(char);
 
    if (isLetter) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
 
  console.log("String:", text);
  console.log("Vowels:", vowelCount);
  console.log("Consonants:", consonantCount);
}