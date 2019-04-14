<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['New From Submission'];
	$message = $_POST['message'];
	$formcontent=" From: $name \n Phone: $phone \n Call Back: $call \n Website: $website \n Priority: $priority \n Type: $type \n Message: $message";
	$recipient = "s.kabr973@gmail.com";
	$subject = "Contact Form";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
	header("location: index.html");
?>
