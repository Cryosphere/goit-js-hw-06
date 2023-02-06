
const inputReplication = () => {
    document.querySelector('#name-output').innerHTML = document.querySelector("#name-input").value;
};

document.querySelector("#name-input").addEventListener("input",inputReplication);