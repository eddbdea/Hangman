const word = ['a', 's', 'c', 'u', 'n', 's'];

function submitSearchLetter() {
    const letter = document.getElementById('letter').value
    document.getElementById('letter').value = '';
    let index = word.indexOf(letter);
    console.log(index);
    if(index >= 0 || index <= 5) {
        let p =  document.getElementById('let' + index);
        p.removeAttribute('hidden');
    }
}