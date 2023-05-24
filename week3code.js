let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] – ages[0] is not allowed!

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(49);
console.log(ages);

//1c. Use a loop to iterate through the array and calculate the average age.
function calculateAverage(ages) {
    let total = 0;
    let count = 0;

    ages.forEach(function(item, index) {
        total+= item;
        count++;
    });
    return total / count;
} 
console.log(calculateAverage(ages));

//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//console.log(names);

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
avgNumberOfLetters = names.join('').length / names.length;
console.log(avgNumberOfLetters);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
for (name of names){
    console.log(names.join(' '));

}

//3.  How do you access the last element of any array?
//array.slice(-1);
console.log(names.length - 1);


//4.  How do you access the first element of any array?
console.log(names[0]);

//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the 
//length of each name to the nameLengths array.
let nameLengths = [];

for (let i = 0; i < names.length; i++){
    console.log(nameLengths.push(names[i].length));

}
   console.log(nameLengths);

//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//function sumOfArray(nameLengths) {
    let sum = 0;

    for (let i = 0; i < nameLengths.length; i += 1) {
        sum += nameLengths[i];
    }

    console.log(sum);

    //7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number 
    //of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function someFunction(word, n) {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += word;
        }
        return result;
    }
    console.log(someFunction('Hello', 3));

//8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and 
//the last name separated by a space
let fullName = 'firstName' + ' ' + 'lastName';

function printFullName(firstName, lastName) {

    return firstName + ' ' + lastName;
}
    
    console.log(fullName);
  



//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let arrayOfNum = [5, 18, 90];       

//function sumOfNumbers(arrayOfNum) {

let sum2 = 0;

for (let i = 0; i < arrayOfNum.length; i+= 1){
sum2 += arrayOfNum[i];
}
if (sum2 > 100){
    console.log(true);
 } else {
    console.log(false);
 }

console.log(sum2);


//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.

let total = 0;

for (let i = 0; i < arrayOfNum.length; i++) {
    total += arrayOfNum[i];
}
let avgOfElements = total / arrayOfNum.length;

console.log(avgOfElements);


//11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than 
//the average of the elements in the second array.
// names and arrayOfNum and nameLengths
let arraySum1 = 0;

arrayOfNum.forEach(function(arrayOfNum){
    arraySum1 += arrayOfNum;
});

let arraySum2 = 0
nameLengths.forEach(function(nameLengths){
    arraySum2 += nameLengths;
})
let arrayOneAvg = arraySum1 / arrayOfNum.length;
let arrayTwoAvg = arraySum2 / nameLengths.length;

if (arrayOneAvg > arrayTwoAvg) {
    console.log(true);
} else {
    console.log(false);
}

//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is 
//hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 20.50;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && (moneyInPocket > 10.50)) {
        return true;
    } else {
        return false;
    }
}






