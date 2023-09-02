"use strict";

/// Selecting elements
const square = document.querySelector(".number");
const leftSection = document.querySelector(".left");
const rightSection = document.querySelector(".right");
const myNumber = document.querySelector(".guess");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const labelScore = document.querySelector(".label-score");
const highScore = document.querySelector(".label-highscore");
const clear = document.querySelector(".clear");
const bigScore = document.querySelector(".big-score");

/*
- Make a random number from 1 to 20.
- Check the entered number if equals the random number.
- If number is higher than the random, Execute a condition. if lower, execute   
  another condition. else, execute Correct number.
*/

// Check if local storage has data or not.
if (localStorage.number == null) {
    bigScore.textContent = `0`;
} else {
    bigScore.textContent = localStorage.number;
}

// Making the random number.
const randomNumber = Math.ceil(Number(Math.random() * 20));
score.textContent = `20`;

// Events
clear.addEventListener("click", () => reloadAndClear())
btn.addEventListener("click", () => check());

// The main function.
function check() {
    if (myNumber.value > 0 && myNumber.value < 21) {
        if (myNumber.value > randomNumber) {
            message.textContent = `too high!`;
            decAndFocus();
            clearInput();
        }
        else if (myNumber.value < randomNumber) {
            message.textContent = `too low!`;
            decAndFocus();
            clearInput();
        } else {
            message.textContent = `🎁 Congratulations `
            square.textContent = randomNumber;
            correct();
        }
    }
}
// Clear the input if the answer is wrong.
function clearInput() {
    myNumber.value = '';
}

// Decreases by 1 when answer is wrong.
function decrease() {
    score.textContent -= 1;
};

// If answer is correct, This function would be executed. 
function correct() {
    document.body.style.backgroundColor = '#105c10'
    bigScore.style.color = 'rgb(255, 157, 0)';
    bigScore.style.fontWeight = 'bold';

    // Check data in local storage
    if (localStorage.number == null) {
        localStorage.setItem("number", score.textContent)
    }
    if (score.textContent >= localStorage.number) {
        localStorage.number = score.textContent;
        bigScore.textContent = score.textContent;
    }

    btn.textContent = 'try again';
    btn.style.margin = 'auto';
    btn.onclick = function () { location.reload() }
}


// Reload the application and clear the local storage => highscore[0].
function reloadAndClear() {
    location.reload();
    localStorage.clear();
    bigScore.textContent = `0`;
}

// Decrease And Focus 
function decAndFocus() {
    decrease();
    myNumber.focus();
}