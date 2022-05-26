const counterDisplay = document.getElementById('counter')
const round = document.getElementById('round')
const userScore = document.getElementById('user_score')
const computerScore = document.getElementById('computer_score')
const compChoice = document.getElementById('comp_choice')
const userChoice = document.getElementById('user_choice')
const winner = document.getElementById('winner')
const btn = document.querySelectorAll('.btn')
const overallResult = document.getElementById('overall_result')


// für display none oder block
const inputRadio = document.getElementById('input_radio')
const outputCounter = document.getElementById('output_counter')
const letsPlay = document.getElementById('lets_play')
const result = document.getElementById('result')
const outputBlock = document.getElementById('output_block')
const outputNone = document.getElementById('output_none')

let user_choice;
let comp_choice;
let winnerResult;
let counter = 0;
let countUser = 0;
let countComp = 0;
let roundDisplay = 5;


userScore.innerHTML = countUser;
computerScore.innerHTML = countComp;


btn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            counter++
            if (roundDisplay >= counter) {
                inputRadio.style.display = 'none';
                outputCounter.style.display = 'block'
                letsPlay.style.display = 'none'
                result.style.display = 'block'
                counterDisplay.innerHTML = counter;

                user_choice = e.target.closest('.btn').id
                userChoice.className = `lar la-hand-${user_choice}`;

                generateCompChoice();
                getRadio();


            } else {
                if (countUser === countComp) {
                    overallResult.innerHTML = 'it is a draw!'
                    overallResult.style.color = 'gold'
                } else if (countUser > countComp) {
                    overallResult.innerHTML = 'you win!'
                    overallResult.style.color = 'yellowgreen'
                } else if (countUser < countComp) {
                    overallResult.innerHTML = 'computer win!'
                    overallResult.style.color = 'tomato'
                }
                outputNone.style.display = 'block'
                outputBlock.style.display = 'none'
            }

        })
    }

)

const generateCompChoice = () => {
    let i = 0;
    let rndm = setInterval(function() {
        i++;
        if (i > 10) {
            clearInterval(rndm);
            getResult();
            return
        }
        const randomNumber = Math.floor(Math.random() * 3) + 1
        if (randomNumber === 1) {
            comp_choice = 'rock'
        } else if (randomNumber === 2) {
            comp_choice = 'paper'
        } else if (randomNumber === 3) {
            comp_choice = 'scissors'
        }
        compChoice.className = "lar la-hand-" + comp_choice

    }, 100)
}

const getResult = () => {
    if (comp_choice === user_choice) {
        winnerResult = 'it is a draw!'
        winner.style.color = 'gold'
    } else if (comp_choice === 'rock' && user_choice === 'paper' || comp_choice === 'paper' && user_choice === 'scissors' || comp_choice === 'scissors' && user_choice === 'rock') {
        countUser++
        winnerResult = 'you win!'
        winner.style.color = 'yellowgreen'
    } else if (comp_choice === 'rock' && user_choice === 'scissors' || comp_choice === 'scissors' && user_choice === 'paper' || comp_choice === 'paper' && user_choice === 'rock') {
        countComp++
        winnerResult = 'computer win!'
        winner.style.color = 'tomato'
    }
    winner.innerHTML = winnerResult
    userScore.innerHTML = countUser;
    computerScore.innerHTML = countComp;
}

const getRadio = () => {
    roundDisplay = document.querySelector('.input_radio input:checked').value
    round.innerHTML = roundDisplay;
}