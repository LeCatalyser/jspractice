$(function(){
	$(".form").submit(function(event){
		event.preventDefault();
		var input = $("#user-text").val();
	textAnalyser(input, uniqueWords, average,count);
	});
});
//with help
function textAnalyser(text) {
	text.split(' ').length = text.split(' ');
	var uniqueWords = 'Unique word count:'
	var average= 'Average word length:'
	var	count= 'Word count:'
	for(var i = 0; i < requirements.length; i++) {
		if(requirements[i].average === 'average') {
			console.log(average);
  			$("js-results").append("<dl class='average'>)
  		} if else (requirements[i].count === 'count') {
  			console.log(count);
  		} if else (requirements[i].uniqueWords === 'uniqueWords')
  			console.log(uniqueWords);
}
	}
}

var requirements = ['average','count', 'uniqueWords'];

//on my own

for(var i = 0; i < requirements.length; i++) {
	if(requirements[i].average === 'average') {
  	$('.js-results').append()
  } if else (requirements[i].count === 'count') {
  // do count
  } if else (requirements[i].uniqueWords === 'uniqueWords')
  // do unique words....
}

for( var i = 0; i < words.length; i++){
		var words uniqueWords averageWord= $(this).find("#user-text")
		return(text.length)