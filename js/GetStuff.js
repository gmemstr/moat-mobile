$(document).ready(function(){
  Get();
  SvList();
});

function Get(){ // Get front page content
  $.get("http://gabrielsimmer.com/moat-mobile/api/frontpage.php").done(function(data){
    result = JSON.parse(data);
    for (var i = 0; i < result.length; i++){
      if(result[i]["Linkdescription"]!=null){ // To filter broken titles
        $(".posts").append('<div class="row"> <div class="col-md-8">'+
        '<h3><a href="'+result[i]['MessageContent']+'">' + result[i]['Linkdescription'] + '</a></h3>'+
        '<h5 class="moreinfo">Comments: '+result[i]['CommentCount']+
        ' Dislikes: '+result[i]['Dislikes']+
        ' Likes: ' + result[i]['Likes'] +
        '</h5>'+
        '</div></div>')
    }
    }
  });
}

function SvList(){ // Get default subverses
  $.get("http://gabrielsimmer.com/moat-mobile/api/svlist.php").done(function(data){
    result = JSON.parse(data);
    for (var i = 0; i < 10; i++){
      $(".modal-body").append('<div class="row"> <div class="col-md-8">'+
      '<h3><a href="#'+result+'">' + result[i] + '</a></h3>');
    }
    $(".modal-body").append('<input type="text" class="form-control floating-label" placeholder="/v/">');
  });
}
