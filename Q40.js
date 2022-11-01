console.log(`
Q 40 ) Creating function Object for Music Album,
       for that created 3 contructor variable for storing 3 diff Music Albums.
       `);

// Creating a Constructor function to store Music Album keys.
function make_Album(artist_Name, album_Title, tracks) {
  this.artist_Name = artist_Name;
  this.album_Title = album_Title;
  this.tracks = tracks;
}
// Creating three variables with constructor(new) to store 3 diff Albums.
const album1 = new make_Album("Michael Jackson", "Thriller      ", {
  track1: "Billie Jean",
  track2: "Beat It",
  track3: "Thriller",
});
const album2 = new make_Album("Whitney Houston", "The Body Guard", {
  track1: "I Will Always Love You",
  track2: "I Have Nothing",
  track3: "Queen of the Night",
});
const album3 = new make_Album("Shania Twain   ", "Come On Over  ", {
  track1: "You're Still the One",
  track2: "From This Moment On",
  track3: "Rock This Country!",
});
// Calling the function three times for 3 diff Albums.
console.log(album1);
console.log(album2);
console.log(album3);
