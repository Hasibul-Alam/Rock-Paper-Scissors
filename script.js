function getPlayerChoice(){
    return prompt('Choose from rock, paper, scissor').toLowerCase()
}


function getComputerChoice(){
    const choice = randomInt(1,3)
    switch (choice){
        case 1:
            return 'rock'
            break
        case 2:
            return 'paper'
            break
        case 3:
            return 'scissor'
            break
    }

}

function randomInt(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min
}

function playRound(playerChoice, computerChoice){

    if (playerChoice === 'rock' && computerChoice === 'paper'){
        return `You Lose! Paper beats Rock`
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissor'){
        return `You Lose! Scissor beats Paper`
    }
    else if (playerChoice === 'scissor' && computerChoice === 'rock'){
        return `You Lose! Rock beats scissor`
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock'){
        return `You Win! Paper beats rock`
    }
    else if (playerChoice === 'scissor' && computerChoice === 'paper'){
        return `You Win! Scissor beats Paper`
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissor'){
        return `You Win! Rock beats Scissor`
    }
    else if (playerChoice === 'rock' && computerChoice === 'rock'){
        return `Try again`
    }
    else if (playerChoice === 'paper' && computerChoice === 'paper'){
        return `Try again`
    }
    else if (playerChoice === 'scissor' && computerChoice === 'scissor'){
        return `Try again`
    }
}

function game(){
    playerWinCounter = 0
    computerWinCounter = 0
    tieCounter = 0
    for (let i = 0; i < 5; i++){
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()
        let message = playRound(playerChoice, computerChoice)
        if ( message.slice(0,8) === `You Win!`){
            console.log(`You win the round`)
            playerWinCounter++
        }
        else if (message.slice(0,9) === `You Lose!`){
            console.log(`Computer win the round`)
            computerWinCounter++
        }
        else{
            console.log(`Round Tie`)
            tieCounter++
        }
        
    }
    if (playerWinCounter > computerWinCounter){
        console.log(`You are the Winner!`)
    }
    else if(computerWinCounter === playerWinCounter){
        console.log(`Game Tie!`)
    }
    else{
        console.log(`Computer is the Winner!`)
    }
}

game()
/*const playerChoice = getPlayerChoice()
const computerChoice = getComputerChoice()
console.log(playRound(playerChoice, computerChoice))

console.log(getComputerChoice())*/