

const cars = [" Audi ", "Mark X ", "BMW ", "Toyota "];

console.log(`
Q 22)\tPrinting Array\t
${cars}
`);

try {
  cars[4] = Bugatti;
} catch (error) {
  console.log(`\tCreating Error in Array, catching error by "try & catch()".\t
${error.message}
`);
}


cars[4] = "Bugatti";
console.log(
  `\tResolving Error in Array\t
${cars}
`
);
