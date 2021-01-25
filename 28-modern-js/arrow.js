/********************** Arrow Functions **********************/
// implicit return vs explicit return
// If you have exactly one parameter, you don't need parentheses ()


// const tripleIt = n => {
//     return 3 * n
// }
// const tripleIt = n => 3 * n

// test()

const createAPet = name => ({ petName: name })

createAPet("coco")

// function test () {
//     console.log("hello world")
// }



// let numbersArray = [77, 9, 127, 7, 8, 32]

/********************** MAP **********************/
// Transforms an array
// Does not mutate the original array
// Callback should return the transformation

// const doubledArr = numbersArray.map(num => {
//     return num * 2
// })




/********************** FILTER **********************/
// Returns a subarray satisfying a condition
// Does not mutate the original array
// Callback should return a boolean

// const filteredArr = numbersArray.filter(num => {
//     return num % 2 === 0
// })






let numbersArray = [77, 9, 127, 7, 8, 32]

/********************** SORT **********************/
// mutates the original array
// callback should return a number

// numbers
numbersArray.sort((numA, numB) => {
    return numB - numA
})


let strArr = ["Luis", "Michelle", "Daniel", "Mark", "Raffy"]

// strings
strArr.sort((strA, strB) => {
    return strB.localeCompare(strA)
})


// objects
let objArr = [{ name: "michelle", age: 17 }, { name: "mark", age: 10 }, { name: "luis", age: 12 }, { name: "daniel", age: 15 }]

// sorting on string value
objArr.sort((obj1, obj2) => {
    return obj1.name.localeCompare(obj2.name)
})

// sorting on number value
objArr.sort((obj1, obj2) => {
    return obj1.age.localeCompare(obj2.age)
})