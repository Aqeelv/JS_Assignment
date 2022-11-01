console.log(`
Q 32) Comparing two Arrays for Similar User Names. \n`);

let current_users = ["Asif", "Naveed", "Khurram", "Sultan", "Raees"];
let new_user = ["Yasir", "RaEEs", "Nawaz", "Shehroz", "AsIf"];
let comm = [];
let uniques = new_user.slice();

for (i = 0; i < current_users.length; i++) {
  for (j = 0; j < new_user.length; j++) {
    //if (current_users[i] == new_user[j]){ this & below line returns same result
    if (new_user[j].toUpperCase().includes(current_users[i].toUpperCase())) {
      comm.push(new_user[j]);
      uniques.splice(j, 1);
      console.log(`   ${new_user[j]}  This User Name Already Exists`);
    }
  }
}
for (let z = 0; z < uniques.length; z++) {
  console.log(uniques[z] + " This User Name is Available");
}
console.log("   (Current Users)  Array    => " + current_users);
console.log("   (New User Names) Array    => " + uniques);
console.log("   (Common in Both) Array    => " + comm);
