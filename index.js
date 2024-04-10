
function validateForm() {
       
    
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");

    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var regPhone = /^(\+?\d{10,25})$/;
    var regName = /^[a-zA-Zа-яА-Я\s\-']+$/;

    // Сбросим стили перед началом валидации
    email.style.border = "1px solid #ccc";
    phone.style.border = "1px solid #ccc";
    name.style.border = "1px solid #ccc";
    surname.style.border = "1px solid #ccc";

    let testMail=regEmail.test(email.value) ;
    let  testPhone= regPhone.test(phone.value);
    let testSurname=regName.test(surname.value);
    let testName= regName.test(name.value);

    if (!testMail) {
        alert("Некорректный адрес электронной почты!");
        email.style.border = "1px solid red";
        
    }

    if (!testPhone) {
        alert("Некорректный номер телефона!");
        phone.style.border = "1px solid red";
        
    }

    if (!testName) {
        alert("Некорректное имя!");
        name.style.border = "1px solid red";
       
    }

    if (!testSurname) {
        alert("Некорректная фамилия!");
        surname.style.border = "1px solid red";
      
    }

    if (testMail&&testPhone&&testName&&testSurname){
        alert("Проверка формы прошла успешно!");
       return true ;
        


    }else{
return false 
    }

    
}
$(document).ready(function() {
    $("#add-form").submit(function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        // Получаем данные формы
        var formData = $(this).serialize();

        // Проверяем форму перед отправкой
        if (validateForm()) {
            // Отправляем данные на сервер с помощью AJAX
            $.ajax({
                type: "POST",
                url: "http://feedback.local/saveData.php", // Укажите путь к файлу обработки на сервере
                data: formData,
                success: function(response) {
                    // Обработка успешного ответа от сервера
                    console.log("Форма успешно отправлена в базу данных!");
                    alert("Данные успешно отправлены");
                },
                error: function(xhr, status, error) {
                    // Обработка ошибок при отправке формы
                    console.error("Произошла ошибка при отправке формы: " + error);
                }
            });
        } else {
            alert("Пожалуйста, заполните форму корректно перед отправкой.");
        }
    });
});

