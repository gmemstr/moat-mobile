$(document).ready(function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET","scripts/homepage.php",true);
  xmlhttp.send();

  $("#posts").hide();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          $("#posts").html(xmlhttp.responseText).fadeIn(500);
          document.getElementById("posts").innerHTML = xmlhttp.responseText;
          document.getElementsByClassName("spinner")[0].style.display = "none";
      }
  }

});
