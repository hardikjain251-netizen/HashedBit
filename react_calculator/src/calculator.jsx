import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [result, setResult] = useState(null);

  const getNumbers = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    return { a, b };
  };

  const handleOperation = (operator) => {
    const { a, b } = getNumbers();

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers in both fields");
      return;
    }

    let output;

    switch (operator) {
      case "+":
        output = a + b;
        break;
      case "-":
        output = a - b;
        break;
      case "*":
        output = a * b;
        break;
      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        output = a / b;
        break;
      default:
        output = "Invalid operation";
    }

    setResult(output);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <div className="input-group">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>×</button>
        <button onClick={() => handleOperation("/")}>÷</button>
      </div>

      {/* The result div - shown only once a calculation has been made */}
      <div className="result">
        Output: {result !== null ? result : "—"}
      </div>
    </div>
  );
}

export default Calculator;