<?php  
require("PHPMailerAutoload.php");
 

$mail = new PHPMailer();
 
$mail->SMTPDebug = 4;


$mail->isSMTP();
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->SMTPSecure='ssl';
$mail->Host='smtp.gmail.com';
$mail->Port='465';
$mail->isHTML();
$mail->Username='estudentgroup@gmail.com';
$mail->Password='estudent123$';
$mail->SetFrom('estudentgroup@gmail.com','E-Student');
$mail->addReplyTo('estudentgroup@gmail.com');
$mail->Subject='nite';
$mail->Body='nite nite';
$mail->AddAddress('nite.qela@student.uni-pr.edu','E-Student');
$mail->Send();

?>




