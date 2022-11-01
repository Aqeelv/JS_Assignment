console.log("\tQ6 (using spaces for dispaying values then using replace() )\t");
console.log("\t++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\t\n");

let p1 = "   George\n   Clooney  ";
let p2 = "   Mark Zucker\tberg  ";

console.log(p1);
console.log(p2);

console.log(p1.replace(/\s/g, ""));
console.log(p2.replace(/\s/g, ""));
