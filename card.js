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
    Ace: {count:0},
    King:{count:0},
    Queen:{count:0},
    Jack:{count:0},
    10:{count:0},
    9:{count:0},
    8:{count:0},
    7:{count:0},
    6:{count:0},
    5:{count:0},
    4:{count:0},
    3:{count:0},
    2:{count:0},
}
let totalPlayer = 0
let totalBot = 0
//functions: randomly distrubutes the cards. use random to get 0 or 1. 
//if 0, card gets given to human, if 1, card gets given to bot. Maximum = 26

function dealing(){
    for(let i = 0; i<deckSize; i++){
        giveRandom = Math.floor(Math.random()*2)
        for( let[cardName,{value,count}] of Object.entries(deckTotal)){
            if (giveRandom == 0){
                if (totalPlayer < 26){
                    for(let [pCardName, playerCount] of Object.entries(humanCards)){
                        if (count > 0){
                            count = count-1
                            if (pCardName === cardName){
                                playerCount ++
                            }
                            }
                
                        
                        
                    }


            }
        }
        
        }
            
        }

}
let target = "King"
for (let pCardName of Object.keys(humanCards)){
    if (pCardName === target ){
        humanCards[pCardName] ++
    }
}
console.log(humanCards)





