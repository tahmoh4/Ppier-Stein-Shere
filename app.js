const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let possibleChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getresult()
}))

function generateComputerChoice() {
const randomNumber= Math.floor(Math.random()*3)+1 // 3 == possibleChoices.length
//console.log(randomNumber)
//console.log(Math.ceil(Math.random()*4))

if(randomNumber ===1){
    computerChoice = 'rock'
}
if(randomNumber ===2){
    computerChoice = 'sissors'
}
if(randomNumber ===3){
    computerChoice = 'paper'
}
computerChoiceDisplay.innerHTML = computerChoice
}
function getresult() {
    result =
        userChoice === computerChoice ? 'Unentschieden !' :
        (userChoice === 'rock' && computerChoice === 'sissors') ||
        (userChoice === 'sissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock') ? 'Du hast gewonnen !' :
        'Du hast verloren !';

    resultDisplay.innerHTML = result;

    resultDisplay.style.color =
        result === 'Du hast gewonnen !' ? 'green' :
        result === 'Du hast verloren !' ? 'red' :
        'blue';
}