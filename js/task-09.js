function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  const color = getRandomHexColor();
   document.body.setAttribute('style', `background:${color}`);
   document.querySelector('.color').innerHTML = color;
}
  
const btnChageColor = document.querySelector('.change-color');
btnChageColor.addEventListener('click', changeColor);



