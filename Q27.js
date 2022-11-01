console.log(`
Q 27 ) Fetching Alien Colors from Array through Math.random()`);

const colors = ["Green", "Yellow", "Red"];
let i = Math.floor(Math.random() * 3);

if (colors[i] == "Green") {
  console.log("\nPlayer just eraned 5 points.\n");
} else if (colors[i] == "Yellow") {
  console.log("\nPlayer just earned 10 points.\n");
} else if (colors[i] == "Red") {
  console.log("\nPlayer just earned 15 points.\n");
}
