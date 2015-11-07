$(document).ready(function(){
  Get();
});

function Get(){
  var result;
  $.get("http://gabrielsimmer.com/moat-mobile/api/GET.php",{sv:"all"}).done(function(data){
    result = JSON.parse(data);
    $(".posts").html(data);
  });
}
