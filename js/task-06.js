const inputElem = document.querySelector('#validation-input');
  inputElem.addEventListener('blur', () => {
      if (inputElem.value.length <= inputElem.getAttribute("data-length")) {
          inputElem.className = 'validation-input valid';
      } else {
          inputElem.className = 'validation-input invalid';
      }
  });
