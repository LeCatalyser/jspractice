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
	$(".word-count").text(wordCount);

	//////////////////////////
	// Unique words section //
	//////////////////////////

//staments end in ;
// j = 4; k = 44; l = 0; 
//
//   stmt;
//   stmt;
//   stmt;
//   if ( j === 4) {
//      stmt;
//      stmt;
//      stmt;
//   }

//   if ( k === 4) {
//      stmt;
//      stmt;
//      stmt;
//   } 
//   else if ( l === 3) {
//      stmt;
//      stmt;
//      stmt;
//   } 
	var words = {};//need to add current word to words object, [] notation. Set value to "anything"
	for (var i = 0; i < wordCount; i++){
		var currentWord = wordArray[i];
		words[currentWord]= 1;
		// did we write down the word on the paper?
		// if we have, add one tally mark
		// else write down the word, and start it at one tally mark
	}
	var uniqueWords = Object.keys(words)//not building an array, it returns an array.  
	$(".unique").text(uniqueWords.length);

    //////////////////////////
	// Average word length //
	//////////////////////////
	console.log(wordArray.length);
	var averageCount = (wordArray.length / wordArray.join("").length);
	console.log(averageCount);
	$(".average").text(averageCount);
}
	//average length of ["abc", "a", "abc"]
	//average length of this string is (3+1+2)/3

	/*var uniqueWords = 'Unique word count:' 
	var average= 'Average word length:'
	var	count= 'Word count:'
	for(var i = 0; i < requirements.length; i++) {
		if(requirements[i].average === 'average') {
			console.log(average);
  		} else if (requirements[i].count === 'count') {
  			console.log(count);
  		} else if (requirements[i].uniqueWords === 'uniqueWords'){
  			console.log(uniqueWords);
  		}
		
	}
}

var requirements = ['average','count', 'uniqueWords'];*/

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