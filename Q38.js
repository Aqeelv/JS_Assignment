console.log(`
Q 38 ) Creating a function() with default values & calling it with 3 different values.`);

function descride_city(City = "Islamabd",Country = "Pakistan") {
    console.log(City+" is in "+Country);
}

descride_city();
 
descride_city("Venice", "Italy");

descride_city("Zurich", "Switzerland");

descride_city("Paris", "France");