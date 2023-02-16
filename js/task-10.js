function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let startSize = 30;
function createBoxes(amount) {

      ; for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.style.width = startSize + "px";
    box.style.height = startSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    document.getElementById("boxes").appendChild(box);
    startSize += 10;
  }
}

function destroyBoxes() {
  let boxes = document.getElementById("boxes");
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
    startSize = 0;
  }
}



const control = document.querySelector('#controls').firstElementChild;
const createBtn = document.querySelector('#controls > *:nth-child(2)');
const destroyBtn = document.querySelector('#controls > *:nth-child(3)');
let valueCtrl = control.value;

control.addEventListener('change', () => { valueCtrl = control.value;});
createBtn.addEventListener('click', () => {
    createBoxes (valueCtrl);
});

destroyBtn.addEventListener('click', () => {
    destroyBoxes ();
});


