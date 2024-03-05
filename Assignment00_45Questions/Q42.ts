//* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_Names: string[] = ["David Smith", "John Smith", "Weekend"];

function make_great(Magicians: string[]) {
  for (const magician of Magicians) {
      console.log(`The Great ${ magician }`);
  }
}
make_great(magician_Names);