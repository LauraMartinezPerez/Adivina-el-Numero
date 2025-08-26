'use strict';

const numberInput = document.querySelector(".js-input")
const button = document.querySelector(".js-btn")
const clue = document.querySelector(".js-clue")
const attempts = document.querySelector(".js-attempts")
let attemptsNumber = 0

    function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
    const randomNumber = getRandomNumber(100);
    console.log(randomNumber);

    const guessNumber = () => {

        const numberValue = parseInt(numberInput.value);

        if (numberValue < 1 || numberValue > 100) {
            clue.innerHTML = "🤯 Fuera de órbita… elige un número válido entre 1 y 100.";
        } else if (isNaN(numberValue)) {
            clue.innerHTML = "🤖 Eso no parece un número. Eh… pon números, no jeroglíficos.";
        } else if (numberValue > randomNumber) {
            clue.innerHTML = "📉 Demasiado alto, prueba más bajo.";
        } else if (numberValue < randomNumber) {
            clue.innerHTML = "📈 Demasiado bajo, prueba más alto.";
        } else if (numberValue === randomNumber) {
            clue.innerHTML = "🏆 ¡Victoria épica! Ese era el número.";
        }  
    }

    const renderAttempts = () => {
        attempts.innerHTML = `${attemptsNumber+=1}`
    }

const handleClick = (ev) => {
    ev.preventDefault();
    guessNumber();
    renderAttempts();
}


button.addEventListener("click", handleClick);
