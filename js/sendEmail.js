document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const formData = new FormData(this);

  // Enviar los datos con AJAX usando fetch
  fetch('sendEmail.php', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(data => {
    if (data.includes('success')) {
      showAlert('Mensaje enviado correctamente', 'alert-success');
    } else {
      showAlert('Hubo un error al enviar el mensaje', 'alert-success');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showAlert('Hubo un error al enviar el mensaje', 'alert-success');
  });
});

function showAlert(message, alertType) {
  const alertBox = document.getElementById('message-alert');
  alertBox.className = `alert ${alertType} alert-dismissible fade show m-auto text-center`;
  alertBox.innerHTML = `
    ${message}
    <button type="button" id="btnAlert" class="close" aria-label="Close" onclick="hideAlert()">
      <span aria-hidden="true">&times;</span>
    </button>
  `;
  
  // Mostrar el mensaje con efecto fade
  setTimeout(() => {
    alertBox.classList.add('show');
  }, 10);
  
  // Ocultar automáticamente después de 3 segundos con efecto fade-out
  setTimeout(() => {
    hideAlert();
  }, 3000);
}

function hideAlert() {
  const alertBox = document.getElementById('message-alert');
  alertBox.classList.remove('show');
  alertBox.classList.add('hide');
  alertBox.innerHTML('');
  
  // Después de la animación, ocultar completamente
  setTimeout(() => {
    alertBox.style.display = 'none';
    alertBox.classList.remove('hide');
  }, 500);
}