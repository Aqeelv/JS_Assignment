console.log(`
Q 45) Created function Object & storing 3 cars information in variable Constructor.
`);

function Cars(manufacturer, carDetails) {
  this.Manufacturer = manufacturer;
  this.Car_Details = carDetails;
}

const car1 = new Cars("Toyota", {
  Car_Model: "Camry",
  Color: "Black",
  Opt_feature: "With Sunroof",
});
const car2 = new Cars("Honda", {
  Car_Model: "Civic",
  Color: "White",
  Opt_feature: "Fully Powered",
});
const car3 = new Cars("Audi", {
  Car_Model: "A8",
  Color: "Red",
  Opt_feature: "with Fridge",
});

console.log(car1);
console.log(car2);
console.log(car3);
