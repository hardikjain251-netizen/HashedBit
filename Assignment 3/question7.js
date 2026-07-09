/* -----------------------------------------------------------
   Q7. Given an array of student objects with a "scores" array,
   produce a new array with each student's name and average
   score. Use Array.map and Array.reduce.
   ----------------------------------------------------------- */
function studentAverages() {
  const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];

  const result = students.map((student) => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;
 
    return { name: student.name, average: average };
  });
 
  console.log(result);
}