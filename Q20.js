console.log("\n\tQ20 (/Storing diff data in Objects of an Array)\t");
console.log("\t+++++++++++++++++++++++++++++++++++++++++++++++++\t\n");

const mydata = [
  { cars: "Bugatti", origion: "Italy", price: "I Million US$" },
  { cars: "Ford", origion: "USA", price: "50,000 US$" },
  { cars: "BMW", origion: "Germany", price: "250000 US$" },
  { cars: "Audi", origion: "Germany", price: "150000 US$" }
];


//for (i = 0; i < mydata.length; i++) { //this for loop and below for in loop will display the same thing

  for (i in mydata){ 
  console.log(
    "\n" +
      mydata[i].cars +
      " Made in " +
      mydata[i].origion +
      " Price is " +
      mydata[i].price
  );
}
console.log(Object.keys(mydata).length);
console.log(mydata.length);
console.log(typeof(mydata));