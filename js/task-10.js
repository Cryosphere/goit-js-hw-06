function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) { let startSize = 30; for (let i = 0; i < amount; i++) { let box = document.createElement("div"); box.style.width = startSize + "px"; box.style.height = startSize + "px"; box.style.backgroundColor = getRandomHexColor(); document.getElementById("boxes").appendChild(box); startSize += 10; } }

function destroyBoxes() { let boxes = document.getElementById("boxes"); while (boxes.firstChild) { boxes.removeChild(boxes.firstChild); } }


const control = document.querySelector('#controls').firstElementChild;
const createBtn = document.querySelector('#controls > *:nth-child(2)');
const destroyBtn = document.querySelector('#controls > *:nth-child(3)');
const amountCtrl = document.getElementsByTagName("input")[1].value;

control.addEventListener('change', () => { console.log(amountCtrl) });
createBtn.addEventListener('click', () => {
  createBoxes(amountCtrl);
  console.log(amountCtrl);
});

// createBtn.addEventListener('click', createBoxes);



