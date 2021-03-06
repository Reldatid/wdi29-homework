console.log('Homework');

// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
let squareNumber = function(num){
  //return (`The result of squaring the number ${num} is ${Math.pow(num, 2)}.`);
  return (Math.pow(num,2));
};
console.log(squareNumber(4));

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
let halfNumber = function(num){
  //return (`Half of ${num} is ${num/2}.`)
  return (num/2);
};
console.log(halfNumber(86));

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
let percentOf = function(num1, num2){
  //return (`${num1} is ${num1/num2*100}% of ${num2}.`)
  return (num1/num2*100);
};
console.log(percentOf(24,30));

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
let areaOfCircle = (rad)=>{
  let circleCalc = Math.PI * Math.pow(rad,2);
  //return (`The area for a circle with radius ${rad} is ${circleCalc.toFixed(2)}.`)
  return circleCalc;
};
console.log(areaOfCircle(2));

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
//  js-homework-2.md
let calculation = (num)=>{
  let res = squareNumber(halfNumber(num));
  //console.log(res);
  let res1 = areaOfCircle(res);
  //console.log(res1);
  let res2 = percentOf(res1, res);
  return res2;
};
console.log((calculation(2)));



// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
let DrEvil = (dollars)=>{
  if(dollars===1000000){
    return (`1000000 dollars (pinky)`);
  }else{
    return(`${dollars} dollars`)
  };
};

console.log(DrEvil(10));
console.log((DrEvil(1000000)));


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
let mixUp =(x,y)=>{
  return (`${y.substring(0,2)}${x.substring(2)} ${x.substring(0,2)}${y.substring(2)}`);
};
console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
let fixStart = function(str){
  let array = str.split('');
  let firstLetter = array.shift();
  let newArray=[firstLetter];
  for (var i = 0; i < array.length; i++) {
    if(array[i] === firstLetter){
      newArray.push('*');
    }else{
      newArray.push(array[i]);
    }
  }
  return  newArray.join('');
};
console.log(fixStart('pkjsfpvasvaepppppafwepp'));




// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
let verbing = function(str){
  if (str.length<3){
    return str;
  }else{
    if (str.endsWith('ing')){
      return (`${str}ly`);
    }else{
      return (`${str}ing`);
    };
  };
};
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));




// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
let notBad = function(str){
  if (str.includes('not') && str.includes('bad')){
    let not = str.indexOf('not');
    let bad = str.indexOf('bad');
    if(not<bad){
      let res = (`${str.substring(0,not)}good`)
      return res;
    }else{
      return str;
    }
  }else{
    return str;
  }
}
console.log(notBad('This dinner is not that bad'));
console.log(notBad('This movie is not so bad'));
console.log(notBad('This dinner is bad'));
console.log(notBad('This dinner is bad not'));
