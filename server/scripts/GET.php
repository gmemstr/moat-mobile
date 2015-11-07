<?php
  $sv = null;
  if(!isset($_POST['sv'])){
    $url = "https://voat.co/api/frontpage";
  }else{
    $url = "https://voat.co/api/subversefrontpage?subverse=".$_POST['sv'];
  }

    $ch = curl_init();

//cURL Options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_VERBOSE, 1);

//SSL Stuff
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

//Last few options
  curl_setopt($ch, CURLOPT_URL,$url); //Placeholder sv
//---

  $res = curl_exec ($ch);

  curl_close ($ch);

  echo $res;
?>
