function printEvenNumbers() {
  console.log("----- Q1: Even numbers from 1 to 100 -----");
  for (let i = 1; i <= 100; i++) {
    // A number is even if it leaves no remainder when divided by 2
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}