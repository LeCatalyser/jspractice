	//confirm why the double parenthesis
	//$('.lightbulb').click(function(event){
		//the curly braces make 
		//the code inside the function right?
		//$('.lightbulb').removeClass('bulb-on')
		//why remove class?
		//$(event.clickedBulb).addClass('bulb-on')
	//});
//}

//$(function(){
	//handleBulbClicks();
//});

function handleBulbClicks() {
  $('.lightbulb').click(function(event){
    $('.lightbulb').removeClass('bulb-on');
 $(event.currentTarget).addClass('bulb-on')
  });  
}

$(function() {
  handleBulbClicks();
});