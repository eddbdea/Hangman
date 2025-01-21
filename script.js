const word = ['a', 's', 'c', 'u', 'n', 's'];
let lives = 7;
let correctAnswer = -1;
const frq = new Array(6).fill(0);

function submitSearchLetter() {
    const letter = document.getElementById('letter').value
    document.getElementById('letter').value = '';
    let index = positionChecked(letter);
    ++frq[index];
    console.log(index);
    if(index >= 0 && index <= 5) {
        let p =  document.getElementById('let' + index);
        p.removeAttribute('hidden');
        ++correctAnswer;
    } else {
        --lives;
        if (lives === 0 && correctAnswer < word.length) {
            document.getElementById('count').innerHTML = 'You lost!';
            setTimeout(function() {
                location.reload();
            }, 3000);
            lives = 7;
            correctAnswer = - 1;
        } else if (lives > 0 && correctAnswer === word.length) {
            document.getElementById('count').innerHTML = 'You won!';
            setTimeout(function() {
                location.reload();
            }, 3000);
            lives = 7;
            correctAnswer = - 1;
        }
        else {
            document.getElementById('count').innerHTML = 'Lives count: ' + lives;
        }
    }
}

function positionChecked(letter) {
    let index = word.indexOf(letter);
    if (frq[index] === 1) {
        index = word.indexOf(letter, index + 2);
        return index;
    }
    return index;
}