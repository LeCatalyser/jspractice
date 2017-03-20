

function max(numbers) {
 //look at first card-pseudo code 
  var first=numbers[0]
  //look at second card
  var second=numbers[1]
   var keep
  //choose the highest between 1st and 2nd
  if (first > second) {
    //if the 1st is higher than the second, the response is:...
    keep = first;
  }
  else {
    //then if the 1st is lower than the second, the response is...
    keep = second;
  }
  
  var countTo = numbers.length;
  for (var i = 2; i <= countTo; i++) {
    //look at next card
    var next=numbers[i]
    //choose the highest once again
    if (keep < next){
      keep = next;
    }
  }
  //return last card standing
  return keep;
  
}