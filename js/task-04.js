let counterValue = 0 ;

document.querySelector('#counter [data-action="decrement"]').addEventListener('click', () => { counterValue--; document.querySelector('#value').innerHTML = counterValue; });

document.querySelector('#counter [data-action="increment"]').addEventListener('click', () => { counterValue++; document.querySelector('#value').innerHTML = counterValue; });