const prompt = require('prompt-sync')()

// random number generator for bot so selects 1 of 3 choices randomly
//user can input s, p, r for the 3 options

function botAnswer(){
    let randomAns = Math.floor(Math.random()*3)
    if (randomAns === 0){
        return "Rock"
    } else if (randomAns === 1){
        return "Paper"
    } else if (randomAns ===2) {
        return "Scissors"
}
}

function checkResult (userInput, botAnswer){

    if (userInput == 'rock' && botAnswer == 'Rock'){
        return 'Try Again!'
    } else if (userInput == 'rock' && botAnswer == 'Paper'){
        return 'You Lose!'
    } else if (userInput == 'rock' && botAnswer == 'Scissors'){
        return 'You Win!'
    } else if (userInput == 'paper' && botAnswer == 'Rock'){
        return 'You Win!'
    } else if (userInput == 'paper' && botAnswer == 'Paper'){
        return 'Try Again!'
    } else if (userInput == 'paper' && botAnswer == 'Scissors'){
        return 'You Lose!'
    } else if (userInput == 'scissors' && botAnswer == 'Rock'){
        return 'You Lose!'
    } else if (userInput == 'scissors' && botAnswer == 'Paper'){
        return 'You Win!'
    } else if (userInput == 'scissors' && botAnswer == 'Scissors'){
        return 'Try Again!'}
}

let userInput = prompt('type here ').toLowerCase()
let botResult = botAnswer()
let result = checkResult(userInput, botResult);

if (userInput == 'paper'){
    userInput = 'Paper'
} else if (userInput == 'rock'){
    userInput = 'Rock'
} else if (userInput == 'scissors'){
    userInput = 'Scissors'
}

console.log("Computer choice: " + botResult);
console.log("Your choice: " + userInput);
console.log(result);