$(document).ready(function(){
  JSON.parse(Get());
});

function Get(){
  $.get("https://gabrielsimmer/moat-mobile/api/GET.php",{sv:"all"}).done(function(data){

  });
}
