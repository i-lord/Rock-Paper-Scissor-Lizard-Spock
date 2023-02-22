const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
// console.log(choices)

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*choices.length)
// console.log(randomNumber)
    return choices[randomNumber]
}
// console.log(getComputerChoice())

const getResult = (playerChoice, computerChoice) => {
    let score;
    if(playerChoice === computerChoice) {
        score = 0
    } else if(
        playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')
    ) {
        score = 1
    } else if (
        playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')
    ) {
        score = 1
    } else if (
        playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')
    ) {
        score = 1
    } else if (
        playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')
    ) {
        score =1
    } else if (
        playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')
    ) {
        score =1
    } else {
        score = -1
    }
     return score
}
// console.log(getResult('rock', 'paper'))

const showResult = (score, playerChoice, computerChoice) => {
    const playerScore = document.getElementById('player-score')
    playerScore.innerText = getResult(playerChoice, computerChoice)
    const hands = document.getElementById('hands')
    const result = document.getElementById('result')
    if(score == -1){
        result.innerText = 'you lose!'
    } else if (score === 0) {
        result.innerText = 'it is a tie!'
    } else {
        result.innerText = 'you win !'
    }

    hands.innerText = `👨🏻${playerChoice} vs 💻${computerChoice}`
}

const onClickRPS = (playerChoice) => {
    const computerChoice = getComputerChoice ();
    const score = getResult (playerChoice, computerChoice)
    
    return showResult (score, playerChoice, computerChoice)
}

const endGame = () => {

    const result = document.getElementById('result')
    const playerScore = document.getElementById('player-score')
    const hands = document.getElementById('hands')

    result.innerText =''
    playerScore.innerText = ''
    hands.innerText = ''

}

const btns = document.querySelectorAll('.rpsButton')
// console.log(btns)

const endGameBtn = document.getElementById('endGameButton')
// console.log(endGameBtn)

const playGame = () => {

    btns.forEach(btn =>{
        btn.onclick = () => onClickRPS(btn.value)
    })

    endGameBtn.onclick = () => endGame()

}

playGame();

