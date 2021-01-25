/********************** What is the spread operator and why would I want to use it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco"]
}

const anotherObj = {
    notebook: "blue",
    pencil: "yellow",
    microphone: "loud"
}

const alsoRaffy = raffy

// old way
const newRaffy = Object.assign({}, raffy, anotherObj)

// console.log(raffy === alsoRaffy)

const actualRaffyCopy = { ...raffy, ...anotherObj }


/********************** What about arrays?? **********************/

const redVeggies = ["red cabbage", "red onion", "rhubarb"]
const greenVeggies = ["spinach", "lettuce", "zucchini"]

const alsoGreenVeggies = greenVeggies

// console.log(greenVeggies === alsoGreenVeggies)

const greenVeggieCopy = [...greenVeggies]
const allVeggies = [...greenVeggies, ...redVeggies]


/********************** Function Example **********************/
// rest parameter
// allows us to take an unlimited number of arguments into the function
// must be the last paramter
function declareMyFaves(arg1, arg2, arg3, ...moreArgs) {
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
    console.log(moreArgs)
    console.log(`I love ${arg1}, ${arg2}, and ${arg3}!!!`)
}


declareMyFaves("spinach", "lettuce", "zucchini", "sphaghetti", 45, 99, 100, 88)
// declareMyFaves(greenVeggies)

