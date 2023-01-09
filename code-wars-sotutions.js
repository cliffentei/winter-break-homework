// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

// 1 (Multiples of 3 or 5)
/* Steps
1) Initialize variable to store our sum 
  (let sumOfMultiples = 0)
2) for loop to count up to number argument 
  ( for (let i = 0; i < number; i += 1) )
3) checking to see if said number argument is divisible by three or five 
  ( if (i % 3 === 0 || i % 5 === 0) )
4) using an assignment operator to add the number to sumOfMultiples 
  ( sumOfMultiples += i; )
5) returning our total sum 
  ( sumOfMultiples )
*/
function solution(number) {
  let sumOfMultiples = 0; 
  for (let i = 0; i < number; i += 1) {  
    if (i % 3 === 0 || i % 5 === 0) { 
      sumOfMultiples += i; 
    }
  }
  return sumOfMultiples; 
}

// 2 (Who likes it?)
/* Steps
1) Create a return statement for each specific length of the names array.
  - if (names.length == 0) {
    return "no one likes this";
  }
  - else if (names.length == 1) {
    return `${names[0]} likes this`;
  }
  - else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  - else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
2) For the last condition, we need to ensure that the number will change depending on the length of the names array.
Since it will always be two less than the total length of the array, we'll reflect that.
else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
*/
function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  }
  else if (names.length == 1) {
    return `${names[0]} likes this`;
  }
  else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// 3 (Find the unique number)
/* Steps
1) Use the find method to find our unique character in our array.
  arr.find((item) => )
2) Our find condition needs to be one that checks if the item's index equals the last occurence of that item.
  arr.indexOf(item) === arr.lastIndexOf(item)
*/
function findUniq(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item) //
  );
}

// 4 (Find the parity outlier)
/* Steps
  1) Delcare two variables, to store our odd and even values inside our integers argument.
    let oddOutlier = [];
    let evenOutlier = [];
  2) Use a for in loop to iterate through the elements in our array.
    for (const number in integers)
  3) Depending on whether or not our number is even or odd, we need to push it to our evenOutlier or oddOutlier array
    if (integers[number] % 2 == 0) {
      evenOutlier.push(integers[number]);
    }
    else {
      oddOutlier.push(integers[number]);
    }
  4) If the length of either array is one, we know we have the outlier, and will return that element in that array.
    return (evenOutlier.length == 1) ? evenOutlier[0] : oddOutlier[0];
*/
function findOutlier(integers) {
  let oddOutlier = [];
  let evenOutlier = [];
  for (const number in integers) {
    if (integers[number] % 2 == 0) {
      evenOutlier.push(integers[number]);
    }
    else {
      oddOutlier.push(integers[number]);
    }
  }
  return (evenOutlier.length == 1) ? evenOutlier[0] : oddOutlier[0];
}

// 5 (Counting Duplicates)
/* Steps
  1) We need to string together a LOT of methods, firstly using a method to keep our letters lowercased.
    text.toLowerCase();
  2) Use a method to create an array consisting of each character in our text argument
    .split('')
  3) We should sort our array, to pair up duplicates.
    .sort()
  4) Once sorted, join elements back together to make a sorted string.
    .join('')
  5) Use .match to check which characters in the string match the desired pattern, one that checks for characters that occur more than once.
    .match(/([^])\1+/g || [])
  6) Use .length to capture the number of characters that duplicate in our text argument. 
    (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length
*/
function duplicateCount(text) {
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// 6 (Moving Zeros to the End)
/* Steps
  1) Create a for loop that loops through our arr argument, backwards
    for (let i = arr.length - 1; i >= 0; i--)
  2) Should our current element equal 0, remove it from the array, and add a zero to our array.
    if (arr[i] === 0){
       arr.splice(i, 1)
       arr.push(0);
       }
  3) Return our modified array.
    return arr;
*/
function moveZeros(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
     if (arr[i] === 0){
       arr.splice(i, 1);
       arr.push(0);
       }
   } return arr;
}

// 7 (Simple Pig Latin)
/* Steps
1) Split string into array 
  ( let strArr = str.split(' ') )
2) Store our pig latinfied phrase into an array that we'll split 
  ( let pigLatinPhrase = [] )
3) Initialize variable that stores regex 
  ( let regex = /([a-zA-Z])/ )
4) Create a for of loop to loop through each element of strArr 
  ( for (let element of strArr) )
5) Use regex test to see if our pattern exists in each element 
  ( if (regex.test(element)) )
6) Use a combination of push, substring, and concatenation, to remove the 2nd character onward in our element, and concatenate the first letter with "ay" if our test yields true, and then push it to our pigLatinPhrase Array.
      pigLatinPhrase.push(element.substring(1) + element[0] + "ay")
  But if false, push the word as normal
      pigLatinPhrase.push(element);
7) To convert our array elements into one string, we use .join to do so. 
  return pigLatinPhrase.join(" ");
*/
function pigIt(str){
  let strArr = str.split(' ');
  let pigLatinPhrase = []; 
  let regex = /([a-zA-Z])/;
  for (let element of strArr){ 
    if (regex.test(element)){ 
      pigLatinPhrase.push(element.substring(1) + element[0] + "ay");
    } else {
      pigLatinPhrase.push(element);
    }
  } return pigLatinPhrase.join(" ");
}