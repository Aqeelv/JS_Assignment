console.log("\n\tQ16 (Adding Guests first, Middle & Last of the List )\t");
console.log("\t+++++++++++++++++++++++++++++++++++++++++++++++++++++\t\n");

let m_array = ["Mark", "Jonathan", "Stacy", "Sarah", "Andrew"];

//myarray.unshift("Sammy"); // adding fisrt in the list

m_array.splice(3, 0, "Kendell"); // adding in the middle

let firstnlast = ["Sammy", ...m_array, "Michael"]; //adding first & last in the list
//I didn't know append() and couldn't find it on google, so I used spread method

for (let i = 0; i < firstnlast.length; i++) {
  console.log(firstnlast[i] + ", You are invited for the dinner");
}
console.log(
  "\nGuys, I found bigger Dinning Table so I Invited few more friends.\n"
);
