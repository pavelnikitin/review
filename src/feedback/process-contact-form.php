<?php
  // функция для проверки длины строки
  function validStringLength($string,$min,$max) {
    $length = mb_strlen($string,'UTF-8');
    if (($length<$min) || ($length>$max)) {
      return false;
    }
    else {
      return true;
    }
  }

  // если данные были отправлены методом POST, то...
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data['result']='success';

    //получить имя, которое ввёл пользователь
    if (isset($_POST['name'])) {
      $name = $_POST['name'];
      if (!validStringLength($name,2,30)) {
        $data['name']='Поля имя содержит недопустимое количество символов.';   
        $data['result']='error';     
      }
    } else {
      $data['name']='Необходимо ввести имя';  
      $data['result']='error';
    } 

     //получить адрес сайта, который ввёл пользователь
     if (isset($_POST['sitetitle'])) {
      $sitetitle = $_POST['sitetitle'];
      if (!validStringLength($sitetitle,2,30)) {
        $data['sitetitle']='Поля имя содержит недопустимое количество символов.';   
        $data['result']='error';     
      }
    } else {
      $data['sitetitle']='Необходимо ввести адрес сайта';  
      $data['result']='error';
    } 

    //получить данные о выбранном тарифе
    if (isset($_POST['formData'])) {
      $formData = $_POST['formData'];
      if (!validStringLength($formData,2,30)) {
        $data['formData']='Поля имя содержит недопустимое количество символов.';   
        $data['result']='error';     
      }
    } else {
      $data['formData']='Обозначте тариф';  
      $data['result']='error';
    } 
   //получить phone, которое ввёл пользователь
    if (isset($_POST['phone'])) {
      $phone = $_POST['phone'];
      if (mb_strlen($phone,'UTF-8')<14) {
        $data['phone']='Телефон введён неправильно';
        $data['result']='error';
      }
    } else {
      $data['phone']='Необходимо ввести номер телефона';      
      $data['result']='error';
    }    
  } else {
    //ошибка не существует ассоциативный массив $_POST["send-message"]
    $data['result']='error';
  }

  // дальнейшие действия (ошибок не обнаружено)
  if ($data['result']=='success') {
    //1. Сохрание формы в файл
    $output = "---------------------------------" . "\n";
    $output .= date("d-m-Y H:i:s") . "\n";
    $output .= "Имя пользователя: " . $name . "\n";
    $output .= "Номер телефона: " . $phone . "\n";
    $output .= "Адрес сайта: " . $sitetitle . "\n";
    $output .= "Тариф: " . $formData . "\n";
    
    
    if (file_put_contents(dirname(__FILE__).'/info/message.txt', $output, FILE_APPEND | LOCK_EX)) {
      $data['result']='success';
    } else {
      $data['result']='error';         
    } 
    //2. Отправляем на почту
    // включить файл PHPMailerAutoload.php
    require_once dirname(__FILE__) . '/phpmailer/PHPMailerAutoload.php';

    //формируем тело письма
    $output = "Дата: " . date("d-m-Y H:i") . "\n";
    $output .= "Имя пользователя: " . $name . "\n";
    $output .= "Номер телефона: " . $phone . "\n";
    $output .= "Адрес сайта: " . $sitetitle . "\n";
    $output .= "Тариф: " . $formData . "\n";
    
    

    // создаём экземпляр класса PHPMailer
    $mail = new PHPMailer;
  
    $mail->From      = 'sales@otziv-na-zakaz.ru';
    $mail->FromName  = 'otziv-na-zakaz.ru';
    $mail->Subject   = 'Сообщение с сайта "Отзыв на заказ"';
    $mail->Body      = $output;
    $mail->AddAddress( 'sales@otziv-na-zakaz.ru' );

    // отправляем письмо
    if ($mail->Send()) {
      $data['result']='success';
    } else {
      $data['result']='error';
    }
  }

  echo json_encode($data);

?>