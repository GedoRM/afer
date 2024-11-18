<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Configurar el correo
    $to = "contacto@afer.mx";
    $subject = "Nuevo mensaje del formulario de contacto";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Cuerpo del correo
    $emailBody = "
    <html>
    <head>
        <title>Nuevo mensaje del formulario de contacto</title>
    </head>
    <body>
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Número:</strong> $phone</p>
        <p><strong>Mensaje:</strong><br>$message</p>
    </body>
    </html>";

    // Enviar el correo
    if (mail($to, $subject, $emailBody, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
} else {
    echo 'Método no permitido';
}
?>