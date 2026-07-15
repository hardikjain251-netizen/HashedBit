const person = {
  name: "Hardik",
  age: 21,
  occupation: "Full Stack Developer Intern",
};
 
function greetPerson(personObj) {
  const message = `Hi, my name is ${personObj.name}, I am ${personObj.age} years old, and I work as a ${personObj.occupation}.`;
 
  console.log(message);
  return message;
}

greetPerson(person);