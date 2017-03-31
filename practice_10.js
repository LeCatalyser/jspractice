//wait for the paget to load and then run this code


$(function(){
	//enter a number, click and get result
	$("form").submit(function(event) {
		event.preventDefault() 
		var userNumber = $('input').val()
		userNumber = parseInt(userNumber)
		//console.log(userNumber)
		var fizz='fizz';
		var buzz='buzz';
		var fizzbuzz='fizzbuzz';
		fizzCheck(userNumber, fizz, buzz, fizzbuzz)

	});//end of submit function

	//person("Max", 29, "teacher");

});

function fizzCheck  (input, fizz, buzz, fizzbuzz){

	for(var i = 0; i < input; i++) {
		if (i % 5 === 0 && i % 3 ===0)  {
			console.log(fizzbuzz);
			$(".js-results").append("<div class='fizz-buzz-item fizzbuzz'><span>fizzbuzz</span></div>")
		} else if (i % 5 === 0){
			console.log(buzz);
			$(".js-results").append("<div class='fizz-buzz-item buzz'><span>buzz</span></div>")
		}  else if (i % 3 ===0 ){
			console.log(fizz)
			$(".js-results").append("<div class='fizz-buzz-item fizz'><span>fizz</span></div>")
		} else {
			console.log(i);
			$(".js-results").append("<div class='fizz-buzz-item'><span>" + i + "</span> </div>")
		}
		
	}

} 


//practice with Max. function person(name, age, profession) {
// Max is 29 years old and is a teacher.
	//console.log(name + ' is ' + age + ' years old and is a ' + profession);
