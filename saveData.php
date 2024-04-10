<?php
require_once "mailSend.php";

// Параметры подключения к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feedbackform";

// Устанавливаем соединение с базой данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Получаем данные из формы
$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];

// Готовим SQL-запрос для вставки данных в базу
$sql = "INSERT INTO feedbacktable (name, surname, phone, mail) VALUES ('$name', '$surname', '$phone', '$mail')";

// Выполняем SQL-запрос
if ($conn->query($sql) === TRUE) {
    sendToTelegram ($name,$surname,$phone,$mail);
    echo "Информация успешно добавлена в базу данных";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

// Закрываем соединение с базой данных
$conn->close();
exit;
?>