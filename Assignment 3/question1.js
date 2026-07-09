/* -----------------------------------------------------------
   Q1. Array of Indian states - remove names starting with
   vowels (A, E, I, O, U), using Array.filter.
   ----------------------------------------------------------- */
function removeStatesStartingWithVowels() {
 
  const states = [
    "Andhra Pradesh", "Bihar", "Chhattisgarh", "Delhi",
    "Gujarat", "Haryana", "Karnataka", "Kerala",
    "Maharashtra", "Odisha", "Punjab", "Rajasthan",
    "Uttar Pradesh", "West Bengal"
  ];
 
  const vowels = ["A", "E", "I", "O", "U"];
 
  const filteredStates = states.filter((state) => {
    const firstLetter = state[0].toUpperCase();
    return !vowels.includes(firstLetter);
  });
 
  console.log("Original:", states);
  console.log("Filtered:", filteredStates);
}