console.log(`
Q 33) Ordinal Numbers`);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 1; i <= nums.length; i++) {
  if (i == 1) {
    console.log(i + "st");
  } else if (i == 2) {
    console.log(i + "nd");
  } else if (i == 3) {
    console.log(i + "rd");
  } else {
    console.log(i + "th");
  }
}
