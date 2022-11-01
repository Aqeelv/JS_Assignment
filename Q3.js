console.log("\tQ3 (Uppecase, Lowercase and Titlecase)\t");
console.log("\t++++++++++++++++++++++++++++++++++++++\t");

let A = "aQeEl mAnSoOr aLi";
let B = A.toUpperCase();
let C = A.toLowerCase();

console.log(C + "\n");
console.log(B + "\n");

let capsIni = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

let words = (str) => str.split(" ").map(capsIni).join(" ");

console.log(words(A));