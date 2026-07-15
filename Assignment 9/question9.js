const car = {
    brand: "Mercedes",
    model:  "G-Class",
    year: 2023,
    color: "Black"
  };
const features = {
    engine: "V8",
    top_speed: "280 km/h",
    transmission: "Automatic"
};

function mergeObj(obj1, obj2){
    return Object.assign({}, obj1, obj2);
}

const mergedCar = mergeObj(car, features);
console.log("Object 1:", car);
console.log("Object 2:", features);
console.log("Merged Object:", mergedCar);
