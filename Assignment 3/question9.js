/* -----------------------------------------------------------
   Q9. Count the number of words in a paragraph.
   ----------------------------------------------------------- */
function countWords(paragraph) {
  const words = paragraph.trim().split(/\s+/);
  return words.length;
}