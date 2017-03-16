function helloX(who) {
  console.log(who)
 who = who || 'world';
 return "hello " + who;
}

helloX() // => "hello world"

function goodbyeX(who) {
  who=who|| 'world';
  return "bye " + who;
}
goodbyeX()

function doTrafficLights() {
  var activeLight = getActiveLight();
  if (activeLight==="red") {
      turnRed();
  }
  
  else if (activeLight==="green"){
      turnGreen();
  }
  
  else if (activeLight==="yellow"){
      turnYellow();
  }
    
  // to `console.log()`
  console.log(activeLight);

}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(handleClicks);


function main() {
  try{
    doAllTheThings();
  }
  catch (e) {
    console.log(e);
  }
}

function doAllTheThings() {
  throw {
    message: "Everything's ruined",
    name: "FatalException",
    toString: function(){return this.name + ": " + this.message;} 
  }
}

function reportError(e) {
  $('.js-error-report').text("Uh oh, something went wrong! Here's what we know: " + e.message);
}



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


$(main);
