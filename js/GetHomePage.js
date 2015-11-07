$(document).ready(function(){
  Get();
});

function Get(){
  $.get("http://gabrielsimmer.com/moat-mobile/api/GET.php").done(function(data){
    result = JSON.parse(data);
    for (var i = 0; i < result.length; i++){
      $(".posts").append('<div class="row"> <div class="col-md-8">'+
      '<h3><a href="'+result[i]['MessageContent']+'">' + result[i]['Linkdescription'] + '</a></h3>'+
      '<h5 class="moreinfo">Comments: '+result[i]['CommentCount']+
      ' Dislikes: '+result[i]['Dislikes']+
      ' Likes: ' + result[i]['Likes'] +
      '</h5>'+
      '</div></div>')
    }
  });
}
