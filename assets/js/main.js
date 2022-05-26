//HTML elements

//user and computer choice,score----------------------------------
const compChoice = document.getElementById('comp_choice');
const userChoice = document.getElementById('user_choice');

// button elements-------------------------------------------------
const btn = document.querySelectorAll('.btn');

//output counter,round,winner and score ---------------------------
const outputCounter = document.getElementById('output_counter');
const outputRound = document.getElementById('output_round');
const outputWinner = document.getElementById('output_winner');
const overallResult = document.getElementById('overall_result');
const userScoreResult = document.getElementById('result_user_score');
const computerScoreResult = document.getElementById('result_computer_score');

// for display none or block---------------------------------------
const radioDisplay = document.getElementById('radio_display');
const counterDisplay = document.getElementById('counter_display');
const letsPlay = document.getElementById('lets_play');
const result = document.getElementById('result');
const playDisplay = document.getElementById('play_display');
const overallDisplay = document.getElementById('overall_display');

//start variables----------------------------------------------------
let user_choice;
let comp_choice;
let winnerResult;
let counter = 0;
let countUser = 0;
let countComp = 0;
let roundDisplay;


userScoreResult.innerHTML = countUser;
computerScoreResult.innerHTML = countComp;

//Functions-------------------------------------------------------

//main function   => start game and how many round
btn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            getRadio();
            counter++;
            if (roundDisplay >= counter) {
                radioDisplay.style.display = 'none';
                counterDisplay.style.display = 'block';
                letsPlay.style.display = 'none';
                result.style.display = 'block';
                outputCounter.innerHTML = counter;

                user_choice = e.target.closest('.btn').id;
                userChoice.className = `lar la-hand-${user_choice}`;

                generateCompChoice();

                if (roundDisplay == counter) {
                    setTimeout(() => {
                        if (countUser === countComp) {
                            overallResult.innerHTML = 'it is a draw!';
                            overallResult.style.color = 'gold';
                        } else if (countUser > countComp) {
                            overallResult.innerHTML = 'you win!';
                            overallResult.style.color = 'yellowgreen';
                        } else if (countUser < countComp) {
                            overallResult.innerHTML = 'computer win!';
                            overallResult.style.color = 'tomato';
                        }
                        overallDisplay.style.display = 'block';
                        playDisplay.style.display = 'none';
                    }, 1500);
                }
            }
        });
    }

);

//generate random computer choice
const generateCompChoice = () => {
    let i = 0;
    //setInterval(function,time)
    //ruft wiederholt eine Funktion auf oder führt ein Snippet mit einer festen Zeitverzögerung zwischen jedem Aufruf aus
    let rndm = setInterval(function() {
        i++;
        if (i > 7) {
            clearInterval(rndm);
            getResult();
            return;
        }
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1) {
            comp_choice = 'rock';
        } else if (randomNumber === 2) {
            comp_choice = 'paper';
        } else if (randomNumber === 3) {
            comp_choice = 'scissors';
        }
        compChoice.className = "lar la-hand-" + comp_choice;

    }, 100);
};

//get result who win
const getResult = () => {
    if (comp_choice === user_choice) {
        winnerResult = 'it is a draw!';
        outputWinner.style.color = 'gold';
    } else if (comp_choice === 'rock' && user_choice === 'paper' || comp_choice === 'paper' && user_choice === 'scissors' || comp_choice === 'scissors' && user_choice === 'rock') {
        countUser++;
        winnerResult = 'you win!';
        outputWinner.style.color = 'yellowgreen';
    } else if (comp_choice === 'rock' && user_choice === 'scissors' || comp_choice === 'scissors' && user_choice === 'paper' || comp_choice === 'paper' && user_choice === 'rock') {
        countComp++;
        winnerResult = 'computer win!';
        outputWinner.style.color = 'tomato';
    }
    outputWinner.innerHTML = winnerResult;
    userScoreResult.innerHTML = countUser;
    computerScoreResult.innerHTML = countComp;
};


//get radio value checked
const getRadio = () => {
    // form elements->input radio-------------------------------------
    roundDisplay = document.querySelector('.input_radio input:checked').value;
    outputRound.innerHTML = roundDisplay;
};