
console.log("A wise goat said 'eli is cool'")
console.log('A wise goat said "eli is cool"')
console.log(`A wise goat said 'eli is cool'`)


//practice March 10 

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1,num2) {
  return num1 - num2;
}

function testAdd () {
  var num1 = 5;
  var num2 = 10;
  var expected = 15;


  if (add(num1, num2) == expected) {
    console.log("SUCCESS: 'testAdd' is working");
    return true;
  } 

  else {
    console.log("FAILURE 'testAdd' is not working");
    return false;
  }
}

testAdd()

function wisePerson(word1, word2){
 return "A wise " + word1 + " once said: " + '"' + word2+'".'
}

// This one should be:
// A wise Eli once said "Javascript rules".
var result = wisePerson("Eli", "Javascript rules");
console.log(result);

// This one should be:
// A wise goat once said: "Hello world".
console.log(wisePerson("goat", "Hello world"));

function shouter(whatToShout){
  return whatToShout.toUpperCase() + "!!!";
}

//this should be:
console.log(shouter('as you can hear i am whispering'))
console.log(shouter('javascript rules'))
console.log(shouter('coffee is delicious'))

function textNormalizer (text){
  return text.toLowerCase().trim();
}



