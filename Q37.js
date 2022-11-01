console.log(`
Q 37 ) Creating function() with default values.
`);

function medium_shirts(size = "Medium", message = "I love JavaScript") {
  console.log(size, message);
}
medium_shirts();

function large_shirts(size = "Large", message = " I love JavaScript") {
  console.log(size + message);
}
large_shirts();
large_shirts("Small", " I am not a Kid.");
large_shirts("Extra Large", " I am The King.");
