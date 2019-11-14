<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPAuth = true;                               // Enable SMTP authentication

$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->Host = 'smtp.gmail.com'; 					  // Specify main and backup SMTP servers


$mail->Username = 'smart.ip.cam.pro@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '1920smartipcam'; // Ваш пароль от почты с которой будут отправляться письма

$mail->setFrom('smart.ip.cam.pro@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('smart.ip.cam.pro@gmail.com');     // Кому будет уходить письмо 


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка SmartIP';
$mail->Body    = "\nФИО: ".$name."\nТелефон: " .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>