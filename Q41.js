console.log(`
Q 41 ) Creating an Array ( magicians ) and Passing it into a function.
`);

const magicians = [
  "Dynamo",
  "Derren Brown",
  "Shin Lim",
  "David Blaine",
  "David Copperfield",
];

function show_magicians(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
show_magicians(magicians);
