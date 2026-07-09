/* -----------------------------------------------------------
   Q11. Given an object of students, each with 5 subject
   scores, produce a new object with each student's average.
   Use array and object methods (Object.entries / Object.fromEntries).
   ----------------------------------------------------------- */
function studentSubjectAverages(studentsObj) {

  const entries = Object.entries(studentsObj).map(([studentKey, subjects]) => {

    const marks = Object.values(subjects);
 
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
 
    return [studentKey, { average: average }];
  });

  return Object.fromEntries(entries);
}
 
function testStudentSubjectAverages() {
  const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  };
 
  console.log(studentSubjectAverages(studentsData));
}