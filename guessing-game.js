const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is you fave number? ',(number)=>{
    console.log(Number(number) === 42);
    rl.close();
});

// const handleFirstQuestion = (answer)=> {
//     console.log('hello ' + answer);

//     rl.question('Where are you from ',handleSecondQuestion);
// };

// const handleSecondQuestion = (answer)=> {
//     console.log(answer + ' is a great place!');


//     rl.question('How are you doing ',handleThirdQuestion);
// };

// const handleThirdQuestion = (answer)=> {
//     console.log('very cool, ' + answer);
//     rl.close();
// };

// rl.question('What is your name? ',handleFirstQuestion);
