console.log("\nQ 29 ) Favourite Fruits. \n");
let fruits = ["Strawberry","Pineapple","Guava","Mango","Peach"];

for (let i = 0; i < fruits.length; i++)
{
    if(fruits[i] == "Strawberry"){
    console.log("You really like Strawberry ?");
}
else if (fruits[i] == "Pineapple"){
    console.log("You really like Pineapple ?");
}
else if (fruits[i] == "Guava"){
    console.log("You really like Guava ?");
}
else if (fruits[i] == "Mango"){
    console.log("You really like Mango ?");
}
else if (fruits[i] == "Peach"){
    console.log("You really like Peach ?");
}
};

// the above result can be achieved through includes(). 
if (fruits.includes("Cherry")){
    console.log("You really like Cherry ?");
} else {
    console.log("Sorry we don't have your desired fruit.\n ");
};