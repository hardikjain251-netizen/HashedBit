const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue"
  };

  function describeCar(Obj) {
    return Object.keys(Obj);
  }
  
  console.log("Object:",car);
  console.log("keys:", describeCar(car));