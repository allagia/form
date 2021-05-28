const viewControls = document.querySelectorAll('.password-control');

viewControls.forEach(function (el) {
  const parantEl = el.closest('div');
  const targetInput = parantEl.querySelector('input[type="password"]');

  el.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (targetInput.getAttribute('type') === 'password') {
      el.classList.add('view');
      targetInput.setAttribute('type', 'text');
    } else {
      el.classList.remove('view');
      targetInput.setAttribute('type', 'password');
    }
    return false;

  });
});
