const words = ['bag', 'apple', 'phone', 'night', 'dog', 'summer'];
const MAX_LIVES = 7;
const PAGE_RELOAD_SPEED = 3000;
const winningMessage = document.getElementById('count');
let lives = MAX_LIVES;
let correctAnswer = -1;
let choosenWord = [];
const frq = [];

function randomNumber() {
    const maxLength = words.length;
    let number = Math.floor(Math.random() * maxLength);
    return number;
}

function createGameBoard() {
    const wordIndex = randomNumber();
    choosenWord = words[wordIndex];
    frq.length = choosenWord.length;
    frq.fill(0);
    for (let i = 0; i < choosenWord.length; ++i) {
        const divElement = document.createElement('div');
        document.getElementById('main-div').appendChild(divElement);
        divElement.setAttribute('class', 'border');
        divElement.id = 'num' + i;
        const h2Element = document.createElement('h2');
        document.getElementById('num' + i).appendChild(h2Element);
        h2Element.id = 'let' + i;
        h2Element.setAttribute('hidden', 'true');
        h2Element.textContent = choosenWord[i];
    }
}

createGameBoard();

function submitSearchLetter() {
    const inputElement = document.getElementById('letter');
    const letter = inputElement.value;
    inputElement.value = '';
    let index = positionChecked(letter);
    ++frq[index];
    gameStatus(index);
}

function gameStatus(index) {
    if (index >= 0 && index <= choosenWord.length && frq[index] === 1) {
        const p = document.getElementById('let' + index);
        p.removeAttribute('hidden');
        ++correctAnswer;
        isWinner();
    } else {
        --lives;
        isLooser();
    }
}

function isWinner() {
    if (lives > 0 && correctAnswer === choosenWord.length - 1) {
        winningMessage.innerHTML = 'You won!';
        restartGame();
    }
}

function isLooser() {
    if (lives === 0 && correctAnswer < choosenWord.length) {
        winningMessage.innerHTML = 'You lost!';
        restartGame();
        return true;
    }
    winningMessage.innerHTML = 'Lives count:' + lives;
}

function positionChecked(letter) {
    let index = choosenWord.indexOf(letter);
    if (frq[index] === 1) {
        index = choosenWord.indexOf(letter, index + 1);
    }
    return index;
}

function restartGame() {
    setTimeout(function () {
        location.reload();
    }, PAGE_RELOAD_SPEED);
    lives = MAX_LIVES;
    correctAnswer = -1;
}