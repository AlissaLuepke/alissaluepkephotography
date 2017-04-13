<?php 
$name = $_POST["InputName"];
$email = $_POST["InputEmail"];
$text = $_POST["InputText"];
//GANZ  GANZ GANZ WICHTIG
$name = filter_var($name, FILTER_SANITIZE_STRING);
$email = filter_var($email, FILTER_SANITIZE_STRING);
$text = filter_var($text, FILTER_SANITIZE_STRING);

return "Name:" . $name . "<br/> Email: " . $email . "<br/> Text:" . $text . "<br/>";