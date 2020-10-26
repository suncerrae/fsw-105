const name = "John";
const age = 101;

function runForLoop(pets) {
    const petObjects = []

    for(let i = 0; i < pets.length; i++) {
        const pet = {type: pets[i]};
        let name;
        if (pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log("pet name: ",name);
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name);
    return petObjects;

}

runForLoop(["cat", "dog"]);


// 2

const carrot = ["bright orange", "ripe", "rotten"];

mapVegetables = (arr) => {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot };
    
    });
};
console.log(mapVegetables(carrot));

//3

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
];

filterForFriendly = (arr) => {
    return arr.filter(person => {
        return person.friendly;
    });
};
console.log(filterForFriendly(people));

//4

doMathSum = (a, b) => {
    return a + b
};
console.log(doMathSum(2, 6))


const produceProduct = (a, b) => {
    return a * b
};
console.log(produceProduct(8, 2));

//5

printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    console.log("Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?");
}
printString("Kat", "Stark", 40);

//6

printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
}
printString("Kat", "Stark", 40);

//7 

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }

];


filterForDogs = (arr) => { return arr.filter(animal => { return animal.type === "dog" ? true : false })};

console.log(filterForDogs(animals));


//8

message = (name, location) => {
    console.log(`Hi ${name}`)
    console.log(`Welcome to ${location}.`)
    console.log(`I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)
}
message("Janice", "Hawaii"); 