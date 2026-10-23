// 52 card deck game where the bigger card wins. Ace is low.

let deckTotal = {
    Ace:{value:1, count:4},
    King:{value:13, count:4},
    Queen:{value:12, count:4},
    Jack:{value:11, count:4},
    10:{value:10, count:4},
    9:{value:9, count:4},
    8:{value:8, count:4},
    7:{value:7, count:4},
    6:{value:6, count:4},
    5:{value:5, count:4},
    4:{value:4, count:4},
    3:{value:3, count:4},
    2:{value:2, count:4},
}
const deckSize = 52
let humanCards = {
    Ace: 0,
    King:0,
    Queen:0,
    Jack:0,
    10:0,
    9:0,
    8:0,
    7:0,
    6:0,
    5:0,
    4:0,
    3:0,
    2:0,
}
let botCards = {
    Ace: 0,
    King:0,
    Queen:0,
    Jack:0,
    10:0,
    9:0,
    8:0,
    7:0,
    6:0,
    5:0,
    4:0,
    3:0,
    2:0,
}
let totalPlayer = 0
let totalBot = 0
//functions: randomly distrubutes the cards. use random to get 0 or 1. 
//if 0, card gets given to human, if 1, card gets given to bot. Maximum = 26

function dealing(){
    for (let cardName of Object.keys(deckTotal)){
        for (let pCardName of Object.keys(humanCards)){
            if (pCardName === cardName){
                while (deckTotal[cardName].count > 0){
                    deckTotal[cardName].count --

                    let giveRandom = Math.floor(Math.random()*2)
                    if (totalPlayer === 26) giveRandom = 1
                    if (totalBot === 26) giveRandom = 0

                    if (giveRandom === 0){
                        humanCards[pCardName] ++
                        totalPlayer ++
                    } else {
                        botCards[pCardName] ++
                        totalBot ++
                    }
                }
            }
        }
    }
}

// let target = "King"
// for (let pCardName of Object.keys(humanCards)){
//     if (pCardName === target ){
//         humanCards[pCardName] ++
//     }
// }
// console.log(humanCards)

// for( let cardName of Object.keys(deckTotal)){
//     if (totalPlayer < 26){
//         for(let pCardName of Object.keys(humanCards)){
//             if (pCardName === cardName){
//             while (deckTotal[cardName].count > 0){
//                 deckTotal[cardName].count --
//                 humanCards[pCardName] ++
//                 totalPlayer ++
//                 }
//             }
//         }
//     }
// }
dealing()

function draw(){
    let count = 0
    let dealtCard = ''
    let humanDrawn = ''
    let botDrawn = ''
    while (count<=1){
        drawCard = Math.floor(Math.random()*13)
        if (drawCard == 0){
        dealtCard = "Ace"
        } else if (drawCard == 1){
            dealtCard = "2"
        } else if (drawCard == 2){
            dealtCard = "3"
        } else if (drawCard == 3){
            dealtCard = "4"
        } else if (drawCard == 4){
            dealtCard = "5"
        } else if (drawCard == 5){
            dealtCard = "6"
        } else if (drawCard == 6){
            dealtCard = "7"
        } else if (drawCard == 7){
            dealtCard = "8"
        } else if (drawCard == 8){
            dealtCard = "9"
        } else if (drawCard == 9){
            dealtCard = "10"
        } else if (drawCard == 10){
            dealtCard = "Jack"
        } else if (drawCard == 11){
            dealtCard = "Queen"
        } else if (drawCard == 12){
            dealtCard = "King"
        }

        if (count == 0){
            if (humanCards[dealtCard]!==0){
            humanDrawn = dealtCard
            count ++
            humanCards[dealtCard]--
            }
        } else if (count == 1){
            if (botCards[dealtCard]!==0){
            botDrawn = dealtCard
            count ++
            botCards[dealtCard]--
            }
        }
    }
    return [humanDrawn, botDrawn]
}

function compare(humanCard, botCard){
    let count = 0
    let humanVal = 0
    let botVal = 0
    while (count < 2){
        if (count == 0){
            humanVal = deckTotal[humanCard].value
            count ++
        } else if (count == 1){
            botVal = deckTotal[botCard].value
            count ++
        }
    }
    if (humanVal > botVal){
        return 1
    } else{
        return 0
    }

}

let running = true
let totalRound = 1
let humanWins = 0
let botWins = 0
while (running === true){
    let humanResult = ""
    let botResult = ""
    let roundResult = 0
    
    dealing();
    [humanResult, botResult] = draw()
    console.log("Your card is: " + humanResult + " , " + "your opponents card is: " + botResult)
    roundResult = compare(humanResult, botResult)
    if (roundResult === 1){
        console.log("you win round: " + totalRound)
        humanWins ++
        totalRound ++
    } else if(roundResult === 0){
        console.log("you lost round: " + totalRound)
        totalRound ++
        botWins ++
    }
    if (totalRound > 26){
        if (humanWins > botWins){
            console.log("you win")
            running = false
        } else if(botWins > humanWins){
            console.log("you lose")
            running = false
        } else{
            console.log("you draw")
            running = false
        }
    }
}




//console.log(humanCards)
//console.log(botCards)
//console.log(deckTotal)