const num = [1,2,3,4,5,6,7,8,9,10];

function arraySum(arr){
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log("Array:", num);
console.log("Sum of array elements:", arraySum(num));