  var varVariable = "I am declared with var";
  let letVariable = "I am declared with let";
  const constVariable = "I am declared with const";
 
  console.log(varVariable, "|", letVariable, "|", constVariable);

  if (true) {
    var varInsideBlock = "var ignores block scope";
    let letInsideBlock = "let respects block scope";
    const constInsideBlock = "const respects block scope";
  }

  console.log("varInsideBlock is accessible here:", varInsideBlock);

