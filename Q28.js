console.log(`
Q 28 ) Stages Of Life, Getting age from Math.random().`);

let age = Math.floor(Math.random() * 80)+1;
if (age < 2) {
  console.log(`\nAge = ${age}, A Person is a Baby\n`);
} else if (age == 2 || age < 4) {
  console.log(`\nAge = ${age}, A Person is a Toddler\n`);
} else if (age == 4 || age < 13) {
  console.log(`\nAge = ${age}, A Person is a kid\n`);
} else if (age == 13 || age < 20) {
  console.log(`\nAge = ${age}, A Person is a Teenager\n`);
} else if (age == 20 || age < 65) {
  console.log(`\nAge = ${age}, A Person is an Adult\n`);
} else if (age >= 65) {
  console.log(`\nAge = ${age}, A Person is an Elder\n`);
} else {
  console.log("A person is geeting an old");
}
