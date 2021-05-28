const maskOptions = {
  min: 11,
  mask: '+{7} (000) 000-00-00',
};
const maxNumberTel = 18;
const telForm = document.querySelectorAll('input[type="tel"]');

[].slice.call(document.querySelectorAll('input[type="tel"]')).forEach(function (input) {
  new IMask(input, maskOptions);
});

if (telForm) {
  telForm.forEach(function (item) {
    item.addEventListener('input', function () {
      const telInput = item.value.length;
      if (telInput < maxNumberTel) {
        item.setCustomValidity('Добавьте ещё цифру');
        const parent = item.parentElement
        const errorMessage = parent.querySelector('.invalid-feedback');
        errorMessage.innerHTML = 'Добавьте ещё цифру';
      } else {
        item.setCustomValidity('');
      }
    });
  });
}
