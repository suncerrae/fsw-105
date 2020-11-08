const readlineSync = require('readline-sync');

const playerName= readlineSync.question("Welcome to the Colossal Adventure! What is the name of the brave warrior who chooses to embark on this exciting but dangerous adventure?");

const intro = (`Hello ${playerName} you are a brave warrior to have taken on this big challenge. Deep in the forbidden forest there are many creatures waiting for new flesh. Will you run or will you fight?`);
console.log(intro);

const menuOptions = ["Walk", "Inventory"];
const battleOptions = ["Attack", "Run", "Inventory"];

let creatureOne = {
    name: "Swamp Nix",
    health: 100,
    power: 20,
    rewards: "Health Potion"
};

let creatureTwo = {
    name: "Wild Windigo",
    health: 100,
    power: 40,
    rewards: "Power Potion"
};

let creatureThree = {
    name: "Dark Demon",
    health: 100,
    power: 30,
    rewards: "Armor Potion"
};

let player = {
    name: playerName,
    health: 100,
    power: 50,
    rewards: []
};

const creatures = [creatureOne, creatureTwo, creatureThree];

 function adventureGame() {

    while(player.health > 0) {

    const info = readlineSync.keyInSelect(menuOptions, "What would you like to do? Select one of the following numbers that represents your action");
    if(menuOptions[info] === "Inventory") {
         console.log(` Player Name: ${player.name} \n Health Level: ${player.health} \n Inventory: ${player.rewards}`);
     } else if (menuOptions[info] === "Walk") {
         console.log("Walking through the forbidden forest...");
         let random = (Math.floor(Math.random()*10))
         if (random <= 3) {
            console.log("No creatures in sight... ")
         } else if (random >= 4) {
            let creature = creatures[Math.floor(Math.random()*creatures.length)];
            console.log(`You ran into the ${creature.name}!`)

    const playerOpt = readlineSync.keyInSelect(battleOptions, "You have been confronted with an evil creature! Will you Attack or will you Run? Select one of the following numbers that represents your action");

    if(battleOptions[playerOpt] === "Attack") {
    const attack = () => {
    let playerAttack = Math.floor(Math.random() + player.power);
    creature.health -= playerAttack
        console.log(`${player.name} hit with power of ${playerAttack}`);
    let creaturesAttack = Math.floor(Math.random() + creature.power);
    player.health -= creaturesAttack
        console.log(`${creature.name} hit with power of ${creaturesAttack}`);
    if (creature.health > 0 && player.health > 0) {
        attack();
    } else {
        if (creature.health <= 0 && player.health <= 0) {
            console.log("You have both fallen in battle.");
        } else if (creature.health <= 0) {
            console.log("You have defeated the creature");
            let prize = Math.floor(Math.random())
            if (prize <= 4) {
                player.rewards.push(creature.rewards) }
            } else if (player.health <= 0){
            console.log("You have been defeated. Game Over!")};
        }
    }
    attack();
    } else if(battleOptions[playerOpt] === "Inventory") {
        console.log(` Player Name: ${player.name} \n Health Level: ${player.health} \n Inventory: ${player.rewards}`);
    } else if(battleOptions[playerOpt] === "Run") {
        let running = (Math.floor(Math.random()*2))
        if (running <= 2) {
            console.log("You have not escaped, the creature is attacking you!!")
            const attack = () => {
                let creaturesAttack = Math.floor(Math.random() + creature.power);
                player.health -= creaturesAttack
                    console.log(`${creature.name} hit with power of ${creaturesAttack}`);
                let playerAttack = Math.floor(Math.random() + player.power);
                creature.health -= playerAttack
                    console.log(`${player.name} hit with power of ${playerAttack}`);
                if (creature.health > 0 && player.health > 0) {
                    attack();
                } else {
                    if (creature.health <= 0 && player.health <= 0) {
                        console.log("You have both fallen in battle.");
                    } else if (creature.health <= 0) {
                        console.log("You have defeated the creature");
                        let prize = Math.floor(Math.random())
                        if (prize <= 4) {
                            player.rewards.push(creature.rewards) }
                        } else if (player.health <= 0){
                        console.log("You have been defeated. Sorry! Game Over!")};
                        }
                        }
                        attack();
                        } else if (random >= 1) {
                            console.log("You have escaped, you are free!")
        
                    }
                }
            }           
        }
    } 
}

adventureGame();