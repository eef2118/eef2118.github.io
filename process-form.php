<?php
/* 
* 
* This script send email when user fills in the form
* Check out this tutorial on PHP forms http://myphpform.com/php-form-tutorial.php or this http://www.tizag.com/phpT/forms.php one
*
*/

$to = "elisabeth.fabila@gmail.com";
$subject = "Thank you for subscribing to the LatAm Venture Bulletin!";
$newsletter = array(true => 'Yes!', 0 => 'No please');
$message = "Ticket type: " . $_POST['ticket'];
$message .= "<br/>Fullname: " . $_POST['Elisabeth Soto'];
$message .= "<br>Company: " . $_POST['LAVCA'];
$message .= "<br>Email: " . $_POST['esoto@lavca.org'];
$message .= "<br>Newsletter subscription: " . $newsletter[$_POST['Thank you for subscribing to the LatAm Venture Bulletin!']];

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: " . $_POST['Elisabeth Soto'] . " <" . $_POST['esoto@lavca.org'] . ">". "\r\n";

if( mail($to, $subject, $message, $headers) ) {
	echo "ok";
} else {
	echo "error";
}