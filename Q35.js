console.log(`
Q35 ) Favourite Pets.`);

const Birds = ["Macou", "Africa Grey", "Cockatoo"];
for (i = 0; i < Birds.length; i++) {
  console.log(Birds[i]);
}

for (j = 0; j < Birds.length; j++) {
  if (j == 0) {
    console.log(Birds[j] + " is one of the most beautiful Parrot.");
  } else if (j == 1) {
    console.log(Birds[j] + " is one of the most Intelligent Parrot.");
  } else if (j == 2) {
    console.log(Birds[j] + " is one of the most funny Parrot.");
  }
}
console.log(`
These are all species of Parrots.
These parrots can talk whatever we teach them.
Most common Pet of three is African Grey, Other two are very expensive.`);
