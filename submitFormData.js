function submitFormData() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;


    if (validateData(email, phone, name, surname)) {
        // Отправка данных на сервер с помощью AJAX
        $.ajax({
            type: "POST",
            url: "http://feedback.local/saveData.php", // Укажите путь к файлу обработки на сервере
            data: {
                email: email,
                phone: phone,
                name: name,
                surname: surname
            },
            success: function(response) {
                // Обработка успешного ответа от сервера
                console.log("Форма успешно отправлена в базу данных!");
            },
            error: function(xhr, status, error) {
                // Обработка ошибок при отправке формы
                console.error("Произошла ошибка при отправке формы: " + error);
            }
        });
    }
}



    function validateData(email, phone, name, surname) {
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
            document.getElementById("add-form").submit();
            
    
    
        }else{
    return false 
        }
    }


// Вызов функции отправки данных при загрузке документа
$(document).ready(function() {
    $("#submit-button").click(function() {
        submitFormData();
    });
});
