5+5
var foo= 2+2
foo -1
var bar = foo *2
bar
8
bar**2
bar/3

typeof 7 === "number" // => true
var total = 1 + 2 + 3 + 4;
console.log(total) // => 10
total = total + 1;
console.log(total) // => 11
total += 3
console.log(total) // => 14
total ++;
console.log(total) // => 15
console.log(3/10) // => 0.3

"batman".substring(0,3);
"laptop".substring(3,6);
"wonderful day".substring(3,7);

if(10%2===0) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("hamburgers".substring(3,10));

var VarName="Leng";
var myAge=34;
var is0dd=true;

 var myName="leng";
 var myAge=34;
 var isOdd=true;
 
 if (myAge %2===0) {
    console.log(true);
}

var myCountry="Colombia";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));

// On line 2, declare a variable myName and give it your name.
var myName="Luisa";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName=myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
console.log(myName);


function celsToFahr(celsTemp) {
  return celsTemp * 9/5 + 32;
}

function fahrToCels(fahrTemp) {
  return (fahrTemp - 32) * 5/9;
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  }
  else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  var cel2FahrInput = 100;
  var cel2FahrExpect = 212;
  var fahr2CelInput = 32;
  var fahr2CelExpect = 0;
  
  if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
     testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
    console.log('SUCCESS: All tests passing');
  }
  else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();

function isDivisible(divisee, divisor) {
  if (divisee%divisor===0) {
    return true;
  }
  else {
    return false;
  }
}
  
  
/* From here down, you are not expected to 
   understand.... for now :)  
   
   Nothing to see here!
   
*/


// tests

function testIsDivisible() {
  console.log("isDivisible(10, 2) is returning " + isDivisible(10, 2));
  console.log("isDivisible(11, 2) is returning " + isDivisible(11, 2));
  console.log("isDivisible(15, 4) is returning " + isDivisible(15, 4));
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  }
  else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();

// On line 2, declare a variable myName and give it your name.
var myName="Luisa";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName=myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
console.log(myName);


function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1,num2){
  return num1 + num2;
}

function testSubtract(num1) {
  var num1 =20;
  var num2 = 15;
  var expected =5;
  
  if (subtract(num1, num2)==5){
    console.log("SUCCESS: 'testSubtract' is working");
  }
  
  else {
    console.log("FAILURE: 'testSubtract' is not working");
    }
    
  if (multiply (num1, num2)==80){
    console.log("SUCCESS: 'test multiply' is working");
  }  
   else {
     console.log("FAILURE: 'test multiply' is not working");
   }
   if (add (num1,num2)==35){
     console.log("SUCCESS 'test add' is working");
   }
   else {
     console.log("FAILURE: 'test add' is not working");
   }
  }
  testSubtract();
  
  function wisePerson(wiseType, whatToSay)
  return wiseType + whatToSay;
  
  function testWisePerson(wiseType) {
    wiseType = "goat";
    var whatToSay= "hello world";
  }
  
  //why is this wrong?
  
  //Second try
  
  function wisePerson(wiseType,whatToSay) {
   var sentence= 'A wise '  +  wiseType +  ' once said: "' + whatToSay + '".';
   console.log(sentence);
   return sentence;
  }

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  var actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  } 
}

testWisePerson();


function wisePerson(wiseType,whatToSay) {
   var sentence= 'A wise '  +  wiseType +  ' once said: "' + whatToSay + '".';
   console.log(sentence);
   return sentence;
  }

wisePerson('goat', 'hello world');



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  var actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  } 
}

testWisePerson();
  