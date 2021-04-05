console.log("connected");
const check = document.querySelector('#checkButton');
const result = document.querySelector('#answer');
const prevInput = document.querySelector('#prev');
let number = document.querySelector('#number');
const turn = document.querySelector('#turn');
const status = document.querySelector('#gameStatus');
const reset = document.querySelector('#reset');







let turnNO = 1;

let randomNo = Math.floor((Math.random() * 20) + 1);
console.log("random no = " + randomNo);
number.focus();




function checkFunc() {
    if (turnNO <= 5) {
        turn.textContent = 'Turn : ' + turnNO;
        prevInput.textContent = (prevInput.textContent) + number.value + ' ';
        if (number.value < randomNo) {
            result.textContent = "Wrong. Guess is LOW";
            result.style.color = "red";
            number.focus();
        }
        else if (number.value > randomNo) {
            result.textContent = "Wrong. Guess is High";
            result.style.color = "red";
            number.focus();

        }
        else {
            result.textContent = "Correct Guess. You Won ...!!";
            check.disabled = true;
            number.disabled = true;
            result.style.color = "green";
            reset.style.display = 'inline';

        }
        if (turnNO == 5) {
            check.disabled = true;
            number.disabled = true;

            status.textContent = "!! Game Over !!";
            status.style.color = "blue";
            reset.style.display = 'inline';
        }
        turnNO++;
    }
}
reset.addEventListener('click', () => {
    turnNO = 1;
    turn.textContent = 'Turn : ';
    result.textContent = '';
    prevInput.textContent = 'Prev Attempts : ';
    status.textContent = '';
    reset.style.display = 'none';
    number.value = '';
    check.disabled = false;
    number.disabled = false;
    number.focus();

});

