/* -----------------------------------------------------------
   Q1. Display numbers from 1 to 100, but only even numbers.
   ----------------------------------------------------------- */
function printEvenNumbers() {
  console.log("----- Q1: Even numbers from 1 to 100 -----");
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

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

/* -----------------------------------------------------------
   Q3. findTax() - calculates tax on a given salary using
   JS switch control flow.
   ----------------------------------------------------------- */
function findTax(salary) {
  let taxRate;
 
  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
 
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
 
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
 
    case (salary > 1500000):
      taxRate = 0.30;
      break;
 
    default:
      return "Invalid salary";
  }
 
  const taxAmount = salary * taxRate;
  return taxAmount;
}

/* -----------------------------------------------------------
   Q4. Given two numbers n1 and n2, find the sum of the
   products of their corresponding digits.
   ----------------------------------------------------------- */
function sumOfDigitProducts(n1, n2) {
  let str1 = String(n1);
  let str2 = String(n2);
 
  const maxLength = Math.max(str1.length, str2.length);
  str1 = str1.padStart(maxLength, "0");
  str2 = str2.padStart(maxLength, "0");
 
  let sum = 0;
 
  for (let i = 0; i < maxLength; i++) {
    const digit1 = Number(str1[i]);
    const digit2 = Number(str2[i]);
    sum += digit1 * digit2;
  }
 
  return sum;
}

