if (confirm ("are you John Smith?"))
{
  console.log("Hello,John, how are you?");
}else {
  console.log("Then what is your name?")
}


var myNumber= 42;
if (myNumber ==42)
{
  console.log("The number is correct.");
}


function word (hello) {
  console.log(hello);
}
word("Max");

var foo=1;
var bar=2;

if(foo < bar)
{
  console.log("foo is smaller than bar.");
}

var foo=1;
var bar=2;
var moo=3;

if (foo <bar && moo>bar)
{
  console.log("foo is smaler than bar AND moo is larger than bar.");
}

if(foo<bar || moo>bar)
{
  console.log("foo is smaller than bar OR moo is larger than bar.");
}

var notTrue=false;
  if(!notTrue)
  {
    console.log("not not true is true!");
  }

var myArray = [1, 2, 'three'];
console.log(myArray.length); // => 3
var lastItem = myArray.pop();
console.log(lastItem); // => three
console.log(myArray.length); // => 2


var myArray = [1, 2, 'three'];
console.log(myArray.length); // => 3
var firstItem = myArray.shift();
console.log(firstItem); // => 1
console.log(myArray.length); // => 2

var myArray = [1, 2, 10, 20, 100, 200];
myArray.sort();
console.log(myArray); // => {1, 10, 100, 2, 20, 200}

function sortNumbers(a, b) {
  return a - b;
}
myArray.sort(sortNumbers);

function isEven(num) {
  return num % 2 === 0;
}

function getFirstEvenNumber(numbers) {
  return numbers.find(isEven);
}

var myNumbers = [1, 2, 3, 4, 5, 6];
myNumbers.find(isEven) // => 2

var myNumbers2 = [1, 3, 5, 7, 9];
myNumbers2.find(isEven) // => undefined

//Creating Arrays

function makeList(item1, item2, item3) {
 return [item1, item2, item3];
}



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testMakeList() {
  
  var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
  var result = makeList(items[0], items[1], items[2]);
  
  if (
    result && result.length && items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  } 
}

testMakeList();

//Adding array items


