//wait for the paget to load and then run this code
$(function(){
	//enter a number, click and get result
	$("form").submit(function(event) {
		event.preventDefault()
		var userNumber = $('input').val()
		userNumber = parseInt(userNumber)
		

	});


});

	//Cat Carousell Answers:
$(".thumbnail").click(function(event){
  //explain what the click handler does
  var imgSource = $(event.currentTarget).find('img').attr('src');
  $(".hero img").attr('src', imgSource);
});