/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

//My solution
var uniqueInOrder = function (iterable) {
  let atr = [];
  let result = [];
  //First, I check the attribute if it's a string
  if (typeof iterable === "string") {
    //If the attribute is a string, transform it into an array
    atr = iterable.split("");
  } else {
    //If the attribute is a array, just take that attribute.
    atr = iterable;
  }
  //This function iterates through the input sequence,
  //and for each element, it checks if it is different from the next one.
  //If they are different, it adds the element to the result array
  for (let i = 0; i < atr.length; i++) {
    if (atr[i] !== atr[i + 1]) {
      result.push(atr[i]);
    }
  }
  return result;
};

//Best Practices
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
