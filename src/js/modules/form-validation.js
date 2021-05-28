(function () {
  'use strict'

  // Получаем все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
  var forms = document.querySelectorAll('.needs-validation')

  // Валидация
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })


  // Проверка на совпадение паролей
  window.onload = function () {
    document.getElementById('password-1').onchange = validatePassword;
    document.getElementById('password-2').onchange = validatePassword;
  };

  function validatePassword() {
    const pass2 = document.getElementById('password-2').value;
    const pass1 = document.getElementById('password-1').value;
    if (pass1 !== pass2) {
      document.getElementById('password-2').setCustomValidity('Пароль не совпадает');
      const parent = document.getElementById('password-2').parentElement
      const errorMessage = parent.querySelector('.invalid-feedback');
      errorMessage.innerHTML = 'Пароль не совпадает';
    } else {
      document.getElementById('password-2').setCustomValidity('');
    }
  }

})()


