<?php

$config = array(
    'recepient' => 'info@gentleminds.io',
    'subject' => 'Письмо с GENTLEMINDS'
);



if(isset($_POST) && !empty($_POST)) {

    $name = $_POST['name'];
    $contact = $_POST['phone'];
    $message = $_POST['message'];
    $email = $_POST['$email'];
    $to = $config['recepient'];

    $message = '<p>Вам пришло уведомление от пользователя - <b>'.$_POST['name'].'</b></p>
        <br><br>Текст сообщения:<br><p><i>'.$_POST['message'].'</i></p>
        <br><p>Телефон: <b>'.$contact.'</b></p>
        <br><p>Email: <b>'.$email.'</b></p>'
       ;

    mail($to, $config['subject'], $message, "Content-type: text/html; charset=\"utf-8\"\n From: $to");
    setcookie ("success", 1, time()+3600);
    header("Location: ./index.html");


}

?>