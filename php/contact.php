<?php 
$name = $_POST["InputName"];
$email = $_POST["InputEmail"];
$text = $_POST["InputText"];
//GANZ  GANZ GANZ WICHTIG
$name = filter_var($name, FILTER_SANITIZE_STRING);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$text = filter_var($text, FILTER_SANITIZE_STRING);

$header  = "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html; charset=UTF-8\r\n";

$header .= "From: webmaster@alissa.luepke.us";
$subject = "Neue Kontaktanfrage";
$to = "alissa@luepke.us";

$mail_content ="<html> <head></head><body>---- Neue Kontaktanfrage ----<br/>".
    "Name: " . $name . "<br/>" .
    "E-Mail: " . $email . "<br/>" .
    "Nachricht: " . $text . "<br/> </body></html>";
$replace = array("Ä", "ä", "Ü", "ü", "Ö", "ö", "ß", "<br/>");
$search = array("Ã", "Ã€", "Ã", "ÃŒ", "Ã", "Ã¶", "Ã?", "\n");
$mail_content = str_replace($search, $replace, $mail_content);

mail($to, $subject, wordwrap($mail_content,70), $header);    
    
echo "\r\nName:" . $name . "\r\nEmail: " . $email . "\r\nText:" . $text;
