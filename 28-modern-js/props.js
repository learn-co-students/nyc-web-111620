/********************** Object Shorthand **********************/
const firstName = "Raffy"
const age = 9
const friends = ["Michelle", "Louie", "Coco"]

// const raffy = {
//     firstName: firstName,
//     age: age,
//     friends: friends
// }

const raffy = { firstName, age, friends }




/********************** Object Computed Property **********************/
// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

const weekday = "saturday"

const schedule = {
    monday: "do chores",
    tuesday: "pay bills",
    wednesday: "work",
    [weekday]: "trip day!"
}

const beef = "tuesday"

// console.log(schedule.monday) // do chores
console.log(schedule[beef]) // pay bills





/********************** Function Example **********************/

function createObject(key, value) {
    return {
        [key]: value
    }
}

const student = createObject("grade", 100)