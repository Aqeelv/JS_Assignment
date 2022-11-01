console.log("\n\tQ17 (deleting Guests with msg & Inviting remaining)\t");
console.log("\t+++++++++++++++++++++++++++++++++++++++++++++++++++++\t\n");

console.log("\nSorry guys, I can invite only two people\n");
let yarray = ["Mark", "Jonathan", "Stacy", "Sarah", "Andrew"];
let ac = yarray.length;
for (let i = 0; i < ac; i++) {
  if (yarray.length <= 2) {
    break;
  }
  console.log(
    yarray.pop() + " I'm extremely sorry, I can't invite you to Dinner\n"
  );
}

for (let b = 0; b < yarray.length; b++) {
  console.log(yarray[b] + " You are still invited for the Dinner\n");
}
yarray.splice(0);
console.log(yarray);
