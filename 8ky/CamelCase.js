/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

//My Solution
function toCamelCase(str) {
  let arr = [];
  let result = [];
  //remove underscores and dashes, and create an array
  arr = str.replaceAll("-", "_").split("_");
  //push first element to result
  result.push(arr[0]);
  for (i = 1; i < arr.length; i++) {
    //capitalize the first letter of all elements in the array except the first one
    result.push(
      arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase())
    );
  }
  //join all elements of the array
  return result.join("");
}

//Best Practice
function toCamelCase(str) {
  let arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    let letter = arr[i];
    if (letter == "_" || letter == "-") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = "";
    }
  }
  return arr.join("");
}

//Best Practice with Regex
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
