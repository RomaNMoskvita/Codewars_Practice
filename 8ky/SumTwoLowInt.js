/*
Create a function that returns the sum of the two lowest positive 
numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

//My solution
function sumTwoSmallestNumbers(numbers) {
  //sorts numbers from the smallest to the largest
  let sortArr = numbers.sort(function (a, b) {
    return a - b;
  });
  //returns the sum of the first two numbers
  return sortArr[0] + sortArr[1];
}

//Best practice
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
