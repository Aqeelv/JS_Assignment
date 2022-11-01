console.log(`
Q43 ) creating a function() & copying and modifying array in it.
      creating another function & displying Orignal and Modified array.`);

const magician = [
  "Dynamo",
  "Derren Brown",
  "Shin Lim",
  "David Blaine",
  "David Copperfield",
];

/* created a function with default message also copying array & modifying it with
    the default message to each name.*/
function make_great(msg) {
  msg = "The Great Magician, ";
  let arr = magician.map((value) => msg + value);
  return arr;
}

// creating and calling new function and printing both Orignal and Modified array.
function show_magicians() {
  console.log(magician);
  console.log(make_great());
}

show_magicians(magician);
