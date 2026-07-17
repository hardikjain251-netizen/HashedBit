/* -----------------------------------------------------------
   Q2. Calculator function using switch statement.
   Takes two numbers and an operator, returns the result.
   ----------------------------------------------------------- */
function calculate(num1, num2, operator) {
  let result;
 
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
 
    case "-":
      result = num1 - num2;
      break;
 
    case "*":
      result = num1 * num2;
      break;
 
    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      result = num1 / num2;
      break;
 
    default:
      return "Error: Invalid operator. Use +, -, * or /";
  }
 
  return result;
}