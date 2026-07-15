function createArrayController(initialArray) {

  const arr = [...initialArray]; 
 
  return {
    push(element) {
      arr.push(element);
      return arr;
    },
    pop() {
      arr.pop();
      return arr;
    },
    getArray() {
      return arr;
    },
  };
}
 
const controller = createArrayController([1, 2, 3]);
 
console.log("Start:", controller.getArray());
console.log("After push(4):", controller.push(4));
console.log("After push(5):", controller.push(5));
console.log("After push(6):", controller.push(6));
console.log("After ONE pop():", controller.pop());
console.log("Final array:", controller.getArray());