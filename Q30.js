console.log("\nQ 30 ) Special Message to Admin.\n");

const z_name = ["Admin","Gracy","Nancy","Austin","Marcello"];

for (i = 0; i < z_name.length; i++){
    if (z_name[i] == "Admin"){
        console.log("Hello Admin would you like see a status repot ?\n");
    }
    else{
         console.log(`Hello ${z_name[i]}, thank you for logging in again.\n`)
    }
}