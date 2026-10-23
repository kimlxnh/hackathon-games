// random number generator for bot so selects 1 of 3 choices randomly
//user can input s, p, r for the 3 options

function botAnswer(){
    let randomAns = Math.floor(Math.random()*3)
    if (randomAns === 0){
        return "Rock"
    } else if (randomAns === 1){
        return "Paper"
    } else {
        return "scissors"
}
}