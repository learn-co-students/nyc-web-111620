/********************** What is the spread operator and why would I want to use it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco"]
}

const alsoRaffy = raffy

// old way
// const newRaffy = Object.assign({}, raffy)

console.log(raffy === alsoRaffy)






/********************** What about arrays?? **********************/

const redVeggies = ["red cabbage", "red onion", "rhubarb"]
const greenVeggies = ["spinach", "lettuce", "zucchini"]

const alsoGreenVeggies = greenVeggies

console.log(greenVeggies === alsoGreenVeggies)



/********************** Function Example **********************/

function declareMyFaves(arg1, arg2, arg3) {
    console.log(`I love ${arg1}, ${arg2}, and ${arg3}!!!`)
}


declareMyFaves("spinach", "lettuce", "zucchini")
