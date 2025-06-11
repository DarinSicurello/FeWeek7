/*  Week 7 Assignment

1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the
last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!


*/


let ages = [3, 9, 23, 64, 2, 8, 28, 9];
let result = ages[ages.length - 1] - ages[0];

console.log(result);


/*  
2. 
Add a new age to your array and repeat the step above to ensure it is dynamic.
 (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age. */

ages.push(35);  
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

let average = sum / ages.length;

console.log("Average age:", average)

/*  

3.
Create an array called names that contains the following 
values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.





 */

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;

// Use a loop to iterate through the array and calculate the
//average number of letters per name.

for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

/* Use a loop to iterate through the array again and 
concatenate all the names together, separated by spaces */

let averageLetters = totalLetters / names.length;
console.log("Average letters / Per name", averageLetters);
let allNames = "";

for (let i = 0; i < names.length; i++) {
  allNames += names[i];
  if (i < names.length - 1) {
    allNames += " ";
  }
}
console.log("Names concat", allNames);



/* 4. 
How do you access the last element of any array?

I used pop!   */

let myArray2 = [1, 2, 3, 4, 5]; {
const lastElement = myArray2.pop();
return myArray2;

}
// 5. How do you access the first element of any array?
// I used Shift for grabing the last element. 

let myArray3 = [1, 2, 3, 4, 5];
let firstElement = myArray.shift();

/*  
6.
Create a new array called nameLengths. Write a loop 
to iterate over the previously created names array and add the length of each 
name to the nameLengths array.
For example:   */

let names1 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let names2 = ["Kelly", "Sam", "Kate"];
let nameLengths = [5, 3, 4];            

for (let i = 0; i < names1.length + names2.length; i++) {
name3 = (names1.length + names2.length)  
nameLengths.push(names[i].length);
}

console.log("Name lengths:", name3);


/*  
7.
Write a loop to iterate over the nameLengths array and calculate the
 sum of all the elements in the array.  */

function nameLengths(nameLengths) {
    let sum = 0;
    for (let i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i];
    }
    return sum;
}

 /*  FRESH CODE>>  

8.
Write a function that takes two parameters, word and n, as arguments 
and returns the word concatenated to itself n number of times.
 (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').  */

 function twoPar1(word, n) {
 return(twoPar1)
 }

/*  
9.
Write a function that takes two parameters, firstName and lastName, 
and returns a full name. The full name should be the first and the 
last name separated by a space.
 */

function twoPar2(firstName, lastName) {
    fullName = (firstName  +  lastName)
    return(fullName)

}

/*  
10.
Write a function that takes an array of numbers and
 returns true if the sum of all the numbers in the array is greater than 100.
   */

 function arrayNum1()  {
    sum(arrayNum1 > 100)
 returns = true;
 
 }

 /*  
11.
Write a function that takes an array of numbers and
 returns the average of all the elements in the array.   */

 function arrayNum2() {
    return avg(arrayNum);
 }

 /*  
12.
Write a function that takes two arrays of numbers and
 returns true if the average of the elements in the first
  array is greater than the average of the elements in the second array. 
  
  I used a String Concatenation 
  */

  function twoArrays(num1, num2) {
    return avg(num1.concat(num2)) > avg(num2);
  }
    

  /*  

13.
Write a function called willBuyDrink that takes a boolean
 isHotOutside, and a number moneyInPocket, and returns true
  if it is hot outside and if moneyInPocket is greater than 10.50.  */

function willBuyDrink(isHotOutside) {
    moneyInPocket = 12.75
    if (moneyInPocket > 10.50)
    return true;
}

/*  

14.
Create a function of your own that solves a problem. In comments,
 write what the function does and why you created it. */

 /*I found a simple code but changed it as most lottos use a high number than 49 plus a power ball so I copied
 generator and renamed it powerball to count so it used 2 generators 
 and I thought it is fun and useful code espsically for learning  loops,
 operators  */

function generateLottoNumbers(count, min, max) {
  if (count <= 0 || max <= min) {
    return "Invalid input parameters.";
  }

  const lottoNumbers = [];
  while (lottoNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
    }
  }
  return lottoNumbers.sort((a, b) => a - b);

  function generateLottoNumbers2(count, min, max) {
  if (count <= 0 || max <= min) {
    return "Invalid input parameters.";
  }

  const lottoNumbers2 = [];
  while (lottoNumbers2.length < count) {
    const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!lottoNumbers2.includes(randomNumber2)) {
      lottoNumbers2.push(randomNumber2);
    }
  }
  return lottoNumbers2.sort((a, b) => a - b);
}


const numbers = generateLottoNumbers(6, 1, 49); // Generate 6 unique numbers between 1 and 49
const powerball = generateLottoNumbers2(1, 1, 26); // Generate 1 unique numbers between 1 and 26
console.log(numbers + powerball);
}