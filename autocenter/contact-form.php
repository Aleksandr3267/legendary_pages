<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

/* Ваш адрес и тема сообщения */
$address = "Prado.saratov@mail.ru";
$sub = "Сообщение с сайта autocenter";

/* Формат письма */
$mes = "Сообщение с сайта autocenter.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Текст сообщения:
$message";


if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from = "Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=http://autocenter');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо отправлено, через 5 секунд вы вернетесь на страницу Автоцентр ПРАДО</body>';}
else {
	header('Refresh: 5; URL=http://autocenter');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 5 секунд вы вернетесь на страницу Автоцентр ПРАДО</body>';}
}
exit; /* Выход без сообщения, если поле bezspama чем-то заполнено */
?>