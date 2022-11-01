console.log(`
Q 42 ) created 2 functions one for dispalying names from array other for additional msg.
`);

const Magicians = [
  "Dynamo",
  "Derren Brown",
  "Shin Lim",
  "David Blaine",
  "David Copperfield",
];

function make_great(msg) {
  msg = "The Great Magician, ";
  return msg;
}

function show_magicians(str) {
  for (let i = 0; i < str.length; i++){
    console.log(make_great() + str[i]);
  }
}
show_magicians(Magicians);
