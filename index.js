// слухач подій для div.js-content
const container = document.querySelector('.js-content'); 
// variable 
let player = 'X'
let historyX = [];
let historyO = [];
// масив виграшних комбінацій
const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
    ];
// функція для розмітки поля
function createMarkup() {
    let markup = '';
    for(let i = 1; i < 10; i += 1) {
        markup += `<div class = 'item js-item' data-id ="${i}"></div>`
    }
    container.innerHTML = markup;
}
createMarkup()
// виклик функції по кліку
container.addEventListener('click', onClick)
// функція на булеву перевірку події
function onClick(e) {
    const { target } = e;
    if(!target.classList.contains('js-item') || target.textContent){
        return;
    }
// нові змінні
    let result = false;
    const id = Number(target.dataset.id);
//додавання айді слухача події
    if (player === 'X'){
    historyX.push(id);
    result = isWiner(historyX);
 }
    else {
        historyO.push(id)
        result = isWiner(historyO);
    }
// додає на місце кліку значення що у змінній 
    target.textContent = player;
// змінна буль що перевіряє довжину масивів
    const againIs = historyO.length + historyX.length === 9;
// результати гри
    if(result) {
        console.log(`winner ${player}!`)
        resetGame();
        return;
    } else if(againIs){
        console.log(`Try again!`)
        resetGame();
        return;
    }
    player = player ==='X' ? 'O' : 'X';
}
function isWiner(arr) {
return wins.some((item) => item.every(id => arr.includes(id)))
}
// онуляція даних
function resetGame(){
    createMarkup()
    historyO = [];
    historyX = [];
    player ='X'

}