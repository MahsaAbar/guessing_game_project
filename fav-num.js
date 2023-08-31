const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const secretNumber = 12

const checkGuess = guess_num =>{
    if(guess_num > secretNumber){
        console.log("Too high.")
        return false
    }else if(guess_num < secretNumber){
        console.log("Too low.")
        return false
    }else{
        console.log( "Correct!")
        return true
    }
};

rl.question('Enter a max number:',(max_num)=>{

    rl.question('Enter a min number:',(min_num)=>{
        console.log(`I'm thinking of a number between ${Number(min_num)} and ${Number(max_num)} ...`);

        rl.question('Enter a guess:', handleFirstGuess);
    });
     
});

const handleFirstGuess = (guess_num)=>{
    if(checkGuess(Number(guess_num))){
        console.log("YOU WON")
    }else{
        rl.question('Enter a guess:', handleSecondGuess);
    }
};

const handleSecondGuess = (guess_num)=>{
    if(checkGuess(Number(guess_num))){
        console.log("YOU WON")
    }else{
        rl.question('Enter a guess:',handleThirdGuess);
    }
};

const handleThirdGuess = (guess_num)=>{
    if(checkGuess(Number(guess_num))){
        console.log("YOU WON")
    }else{
        console.log("OooOOoOps ... You Loss")
    }
    rl.close()
};