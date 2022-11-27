// Just to Show // & /* */ Comment
console.log(
  "\tQ10 (Palindrome Example also showing how to comment in two diff ways.)\t"
);
console.log(
  "\t______________________________________________________________________\t\n"
);

let aa = "sToNe cRusHiNg maCHinE";

let capsini = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

let Words = (str) => str.split(" ").map(capsini).join(" ");

console.log(Words(aa) + "\n");

/* showing double line comment------Palindrome example
using reverse(),join(),split and toString() */
console.log("Palindrome Example using reverse(),split(),join(),toString() \n");

function anyvalue(value) {
  let lowercase = value
    .replace(/[.' ']/g, "")
    .toString()
    .toLowerCase();
  let reversevalue = value
    .replace(/[.' ']/g, "")
    .toString()
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  if (reversevalue == lowercase) {
    console.log(" It's a Palindrome. ");
    // console.log(lowercase);
  } else {
    console.log("It's Not a Palindrome. ");
    //console.log(reversevalue);
  }
}
//anyvalue(prompt("Input Value to check is it Palindrome or Not"));
anyvalue("Mr. Owl ate my metal worm");
anyvalue("madam");
