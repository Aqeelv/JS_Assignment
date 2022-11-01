console.log("\tQ15 (Updating Guest list & Inviting friends on Dinner)\t");
console.log("\t++++++++++++++++++++++++++++++++++++++++++++++++++++++++\t\n");

let my_array = ["Mark", "Jonathan", "Stacy", "Sarah", "Andrew"];
let a2 = my_array.splice(1, 2, "David", "Alvis");

for (let i = 0; i < my_array.length; i++) {
  console.log(my_array[i] + ", You are invited for the dinner" + "\n");
}
console.log(
  "Sorry Guys, " + a2[0] + " & " + a2[1] + " can't make it to the Dinner."
);
