 const result = document.querySelector (".result")
 const machineScore = document.querySelector ("#alexa-score")
 const humanScore = document.querySelector("#my-score")

 let machineScoreNumber = 0
 let humanScoreNumber = 0

const playHuman = (humanChoice) => {
    theMatch (humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [`rock`, `paper`, `scissors`]
    const randomElement = Math.floor(Math.random() * 3)
    return choices [randomElement]
}

const theMatch = (human, machine) => {
    console.log(`humano:` + human + `máquina: ` + machine )
    if(human === machine) {
        result.innerHTML = "deu empate"
    }

    else if (
    (human === "paper" && machine === "rock") ||
    (human === `rock` && machine === `scissors`) ||
    (human === "scissors" && machine === "paper") ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = `Você ganhou!!`
    }

    else {
        result.innerHTML = `você perdeu pra alexa!!`
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}