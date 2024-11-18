
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío por defecto

  // Obtener los datos del formulario
  const formData = new FormData(this);

  // Enviar los datos con AJAX
  fetch('sendEmail.php', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(data => {
    if (data.includes('success')) {
      alert('El mensaje ha sido enviado correctamente.');
    } else {
      alert('Hubo un error al enviar el mensaje.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un error al enviar el mensaje.');
  });
});
