document.addEventListener('DOMContentLoaded', function () {
    const minNumber = 1;
    const maxNumber = 100;
    let secretNumber = generateRandomNumber(minNumber, maxNumber);
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const messageDisplay = document.getElementById('message');
    const minDisplay = document.getElementById('min');
    const maxDisplay = document.getElementById('max');

    minDisplay.textContent = minNumber;
    maxDisplay.textContent = maxNumber;

    submitButton.addEventListener('click', function () {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
            showMessage('Please enter a valid number within the range.');
            return;
        }

        if (guess === secretNumber) {
            showMessage(`Congratulations! ${guess} is correct. You won!`);
            secretNumber = generateRandomNumber(minNumber, maxNumber);
        } else if (guess < secretNumber) {
            showMessage(`Try again. ${guess} is too low.`);
        } else {
            showMessage(`Try again. ${guess} is too high.`);
        }

        guessInput.value = '';
    });

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function showMessage(message) {
        if (message.includes('correct')) {
            messageDisplay.textContent = '';
            alert(`The correct number was: ${secretNumber}`);
        } else {
            messageDisplay.textContent = message;
        }
    }
});
