const controlElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');

controlElem.addEventListener('input', () => {
    spanElem.style.fontSize = `${controlElem.value}px`;
    }
  );