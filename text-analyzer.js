$(function(){
	$(".form").submit(function(event){
		event.preventDefault();
		var input = $("#user-text").val();
	textAnalyser(input);
	});
});

function textAnalyser(text) {
	text.split(' ').length;
	var words = text.split(' ');
	var uniqueWords = {}
	var averageWord = 
	for( var i = 0; i < words.length; i++){
		var words uniqueWords averageWord= $(this).find("#user-text")
		return(text.length)
	}
}


var requirements = ['average','count', 'uniqueWords'];


for(var i = 0; i < requirements.length; i++) {
	if(requirements[i].average === 'average') {
  	//do average js
  } if else (requirements[i].count === 'count') {
  // do count
  } if else (requirements[i].uniqueWords === 'uniqueWords')
  // do unique words....
}