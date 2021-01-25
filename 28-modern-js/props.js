/********************** Object Shorthand **********************/
const firstName = "Raffy"
const age = 9
const friends = ["Michelle", "Louie", "Coco"]

const raffy = {
    firstName: firstName,
    age: age,
    friends: friends
}


/********************** Object Computed Property **********************/
// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

const schedule = {
    monday: "do chores",
    tuesday: "pay bills",
    wednesday: "work"
}


console.log(schedule.monday) // do chores
console.log(schedule["tuesday"]) // pay bills



/********************** Function Example **********************/

function createObject(key, value) {
    return {
        [key]: value
    }
}