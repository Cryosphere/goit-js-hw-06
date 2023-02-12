const inputElem = document.querySelector('#validation-input');
  inputElem.addEventListener('blur', () => {
      inputElem.value.length == inputElem.getAttribute("data-length") ? inputElem.className = 'validation-input valid': inputElem.className = 'validation-input invalid';
      }
  );
