const readlineSync = require("readline-sync");

let isAlive = true;
let hasKey = false;


const playerName= readlineSync.question("Hello! What is your name? ");

const intro = (`Welcome ${playerName} to the Escape Room Simulation! In this game the goal is to find your way out of the locked room. Be careful, one wrong move and you're dead! Muahhahaha!`);
    console.log(intro);


while (isAlive == true){

    const gameMenuOptions = readlineSync.keyIn(" Enter a number from the options below: \n 1. Put hand in hole \n 2. Find the key, or \n 3. Open the door \n Enter your selection: ", {limit: `$<1-3>`});

    if (gameMenuOptions == 1){
        console.log (`BOOOOOOOM! Oh no! ${playerName}, you fell for the trap and set off the bomb! You are Dead. Sorry! Play again... if you dare.`);
        isAlive = false;
    }
    else if (gameMenuOptions == 2 && hasKey == false) {
        console.log (`Great job you found the key! Now get out of here before it's too late!`);
        hasKey = true;
    }
    else if (gameMenuOptions == 2 && hasKey == true) {
        console.log (`You already found the key, there are no more keys left. Please select another option.`);
       
    }
    else if (gameMenuOptions == 3 && hasKey == false) {
        console.log (`The door is still locked. In order to get out you're going to have to find that key!`);
        
    }
    else if (gameMenuOptions == 3 && hasKey == true) {
        console.log (`Congratulations ${playerName}! You found the key and escaped the room! You are free!`);
        isAlive = false;
    }   

};