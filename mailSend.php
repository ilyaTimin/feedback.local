<?php
function sendToTelegram ($name,$surname,$phone,$mail) {

    // Параметры для Telegram бота
    $botToken = "7045075523:AAGIuqnZkXQ1XqIuZOIA3TOIeSRPPcEcXUg";
    $chatId = "293342143";


    // Формируем сообщение для отправки в Telegram
    $message = "Новая заявка:\n";
    $message .= "Имя: " . $name . "\n";
    $message .= "Фамилия: " .$surname . "\n";
    $message .= "Телефон: " . $phone . "\n";
    $message .= "Почта: " . $mail . "\n";

    // Отправляем сообщение в Telegram
    $telegramUrl = "https://api.telegram.org/bot{$botToken}/sendMessage?chat_id={$chatId}&text=" . urlencode($message);
    $response = file_get_contents($telegramUrl);

    // Проверяем результат отправки
    if ($response) {
        echo "Данные успешно отправлены в Telegram";
    } else {
        echo "Ошибка отправки данных в Telegram";
    }


    exit;
}
?>
