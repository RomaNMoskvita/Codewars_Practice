/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

//My solution
function likes(names) {
  let namesL = names.length;
  //The "case" statement checks which procedure to execute and returns the corresponding string
  switch (true) {
    case namesL === 0:
      return "no one likes this";
    case namesL === 1:
      //code
      return `${names[0]} likes this`;
    case namesL === 2:
      //code
      return `${names[0]} and ${names[1]} like this`;
    case namesL === 3:
      //code
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case namesL >= 4:
      //code
      return `${names[0]}, ${names[1]} and ${namesL - 2} others like this`;
  }
}

//Best Practice
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
