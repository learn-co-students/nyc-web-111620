console.log('%cHello World', 'color: magenta')
// console.log("My name is Michelle")


// 7 primitive data types
// symbols
// undefined
// null
// boolean
// Number
// string - '', "", ``
// let raffy = "Raffy's bestie"
// let raffy2 = 'Raffy\'s bestie'
// let raffy3 = `Raffy is my bestie and I am ${raffy}`
// BigInt


// debugger ---> it's like pry!!

let apples = 6

// let, const -> block scoped
//  var -> function scoped
let raffy = {
    name: "Raffy",
    age: 9,
    "is-happy": true
}

// console.log(raffy.name) // dot notation
// console.log(raffy["is-happy"]) // bracket notation


function isItEven(arrArgument) {
    if (arrArgument.length % 2 === 0) {
        console.log("It's even")
    }
    else {
        console.log("It's odd")
    }
}

// let someFunction = isItEven // storing the function definition to a variable
// isItEven(arr) // invoking the function

let arr = [1, 2, 3, 4]

// forEach, map, filter, find

// ⭐️ CALLBACKS ARE AT THE MERCY OF THE FUNCTION RECEIVING THE CALLBACK ⭐️

arr.forEach(function (beef, i, originalArr) {
    console.log('beeef -', beef)
    console.log('i - ', i)
    console.log('original array - ', originalArr)
})

// let doubledArr = arr.map(function (num, index, ogArr) {
//     return num * 2
// })

// console.log(doubledArr)

function doubleIt(num) {
    console.log(num * 2)
}

// takes a callback function and an array as arguments
function myLittleForEach(beef, arr) {
    for (let i = 0; i < arr.length; i++) {
        beef(arr[i])
    }
}

// myLittleForEach(doubleIt, [2, 4, 6, 8])

myLittleForEach(function (num) {
    console.log(num * 2)
}, [2, 4, 6, 8])