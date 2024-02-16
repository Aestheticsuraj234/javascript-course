// Generate Random Number;
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);
const guessForm = document.getElementById("guessForm");
const message = document.getElementById("message");


guessForm.addEventListener("submit" , function(event){
    event.preventDefault();

    const userGuess = parseInt(document.getElementById("guess").value);


    if (userGuess === randomNumber) {
        message.classList.add("text-green-500");
        message.innerText = `Congratulations! You guessed the number!`;
       
    } else {
        message.classList.add("text-red-500");
        message.innerText = `Sorry, the number was ${randomNumber}. Try again!`;
    }

       
    guessForm.reset();
   
})
