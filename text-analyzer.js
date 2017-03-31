$(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var input = $("#user-text").val();
		textAnalyser(input);
	});
});

// text === "eli is cool"
// text.length === 1
// wordArray === ["Eli", "is", "cool"]
//
function textAnalyser(text) {

	////////////////////////
	// Word count section //
	////////////////////////

	//to count unique/specific words in input, need to examine each word and puts them into an array. it places them in an array and will examine later. 
	var wordArray = text.split(' '); // wordArray is the card stack
	var wordCount = wordArray.length;
	// <js-results> 
	$(".word-count").html(wordCount)

	//////////////////////////
	// Unique words section //
	//////////////////////////

	var words = {};
	for (var i = 0; i < wordCount; i++){
		var currentWord = wordArray[i];
		// did we write down the word on the paper?
		// if we have, add one tally mark
		// else write down the word, and start it at one tally mark
	}

	return;

	var uniqueWords = 'Unique word count:' 
	var average= 'Average word length:'
	var	count= 'Word count:'
	for(var i = 0; i < requirements.length; i++) {
		if(requirements[i].average === 'average') {
			console.log(average);
  			$("js-results").append("<ddd class='word-count'>")
  		} else if (requirements[i].count === 'count') {
  			console.log(count);
  		} else if (requirements[i].uniqueWords === 'uniqueWords'){
  			console.log(uniqueWords);
  		}
		
	}
}

var requirements = ['average','count', 'uniqueWords'];

//on my own

// for(var i = 0; i < requirements.length; i++) {
// 	if(requirements[i].average === 'average') {
//   	$('.js-results').append()
//   } if else (requirements[i].count === 'count') {
//   // do count
//   } if else (requirements[i].uniqueWords === 'uniqueWords')
//   // do unique words....
// }

// for( var i = 0; i < words.length; i++){
// 		var words uniqueWords averageWord= $(this).find("#user-text")
// 		return(text.length)