<?php
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Форма обратной связи</title>
   
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

</head>
<style>
    .bg-image {
      background-image: url('https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?w=1060&t=st=1711663227~exp=1711663827~hmac=28c642766e859cd77bd218ed42fba70d8eb55ca66a35db441b326b08a05c39ad');
      background-size: cover;
      background-repeat: no-repeat;
      
    }
  </style>
<body class="bg-image">
    
  
  <div class="container " >
    <div class="row">
      <div class="col-md-6 mx-auto my-5">

      <div>
        <div class="container-sm ">
           
            <div class="container mx-auto border border-lignt p-4 bg-light mt-4 rounded-4 ">
           
               
                <h3 class="text-center p-4 text-uppercase border border-blue rounded-pill">
                    <small class="text-body-secondary">Форма обратной связи</small>
                  </h3>
           
            <form method="post" id="add-form" >
            <div class="mb-3 col">
                
                <input placeholder="Имя" class="form-control rounded-pill " tabindex="1" type="text" name="name" id="name" >
            </div>
            <div class="mb-3 col">
             
                <input tabindex="2" class="form-control rounded-pill " placeholder="Фамилия" type="text" name="surname" id="surname">
            </div>
            <div class="mb-3 col">
               
                <input tabindex="3" class="form-control rounded-pill" placeholder="Телефон" type="tel" name="phone" id="phone">
            </div>
            <div class="mb-3 col">
               
                <input placeholder="em@il" class="form-control rounded-pill " tabindex="4" type="email" name="mail" id="email">
            </div>
  
                
                <div>
                    <button  class="btn btn-primary position-relative py-2 px-4 text-bg-primary border border-ptimary rounded-pill"  >Отправить</button>
  </div>
  </form>
                </div>
                </div>
            </div>
            </div>
        
        </div>
   
    </div>
  </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="index.js"></script>

</body>
</html>
