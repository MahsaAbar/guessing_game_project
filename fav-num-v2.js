const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkGuess = (guess_num, secretNumber) =>{
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

rl.question('Enter a max number : ', max_num =>{
    rl.question('Enter a min number : ',min_num =>{
        console.log("I'm thinking of a number between " +"("+  Number(min_num) + "," + Number(max_num)+ ")"+" ...");
        console.log("You can enter 3 guesses !!!")
        let min_number = Number(min_num);
        let max_number = Number(max_num);
        let secretNumber =  Math.floor(Math.random() * (max_number - min_number) + min_number);

        rl.question ('Enter your first guess:', guess_num =>{
            console.log("You're number is " + Number(guess_num))
            console.log('the random number is '+ secretNumber)
            if(checkGuess(Number(guess_num), secretNumber)){
                console.log("YOU WON")
            }else{
                rl.question('Enter your second guess:', guess_num =>{
                    console.log("You're number is " + Number(guess_num))
                    console.log('the random number is '+ secretNumber)
                    if(checkGuess(Number(guess_num), secretNumber)){
                        console.log("YOU WON")
                    }else{
                        rl.question('Enter your last guess:', guess_num =>{
                            console.log("You're number is " + Number(guess_num))
                            console.log('the random number is '+ secretNumber)
                            if(checkGuess(Number(guess_num), secretNumber)){
                                console.log("YOU WON")
                            }else{
                                console.log("OooOOoOps ... You Loss")
                            }
                            rl.close()
                        })
                    }
                })
            }
        })
    })
});
