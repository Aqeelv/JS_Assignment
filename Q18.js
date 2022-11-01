console.log("\n\tQ18 (Printing Array in Multiple ways)\t");
console.log("\t+++++++++++++++++++++++++++++++++++++++\t\n");

const countries = [
  " Switzerland ",
  " Turkey ",
  " Germany ",
  " Brazil ",
  " Italy ",
];

// Print your array in its original order.
console.log("\na) " + countries);

// Print your array in alphabetical order without modifying the actual list.
let sorting = countries.slice().sort();
console.log("\nb) " + sorting);

//Show that your array is still in its original order by printing it.
console.log("\nc) " + countries);

//printing arrays in reverse alphabatical order
let revesesorting = countries.slice().sort().reverse();
console.log("\nd) " + revesesorting);

// printing array in original form
console.log("\ne) " + countries);

// Reverse the order of your list. Print the array to show that its order has changed.
countries.reverse();
console.log("\nf) " + countries);

// Reverse the order of your list again. Print the list to show it’s back to its original order.

countries.reverse();
console.log("\ng) " + countries);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
countries.sort();
console.log("\nh) " + countries);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
countries.sort().reverse();
console.log("\ni) " + countries + "\n");
