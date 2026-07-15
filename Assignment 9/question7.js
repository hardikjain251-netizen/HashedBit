function calculateArea(rectangle) {
  return rectangle.width * rectangle.height;
}
 
const rect1 = { width: 10, height: 5 };
console.log("Rectangle:", rect1);
console.log("Area:", calculateArea(rect1));
 
const rect2 = { width: 7.5, height: 3 };
console.log("Rectangle:", rect2);
console.log("Area:", calculateArea(rect2));
 