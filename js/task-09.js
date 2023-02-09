function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  const color = getRandomHexColor();
   document.body.setAttribute('style', `background:${color}`);
   document.querySelector('.color').innerHTML = color;
}
  
document.querySelector('.change-color').addEventListener('click', changeColor);



