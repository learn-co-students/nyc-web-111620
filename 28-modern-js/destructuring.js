/********************** What's destructuring & how can I do it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco"],
    fruits: {
        color: {
            abc: "yellow"
        },
        yummy: true
    }
}

// long way
// const name = raffy.name
// const age = raffy.age
// const type = raffy.type
// const bestFriends = raffy.bestFriends

// new way
// const {name: raffysName, age=77, type, bestFriends, beef="hello"} = raffy
// const { fruits: { color: { abc: hotdog } } } = raffy






/********************** What about destructuring arrays?? **********************/
const cryptoCurrencies = ["bitcoin", "dash", "ethereum", "litecoin", "monero"]

// long way
// const bitcoin = cryptoCurrencies[0]
// const dash = cryptoCurrencies[1]
// const eth = cryptoCurrencies[2]
// const lite = cryptoCurrencies[3]

// new way
// const [a, b, c, d, e] = cryptoCurrencies
// const [, , b] = cryptoCurrencies


/********************** Function Example #1 **********************/
function getMovieTitles() {
    return ["Rise of the Planet of the Apes", "Dawn of the Planet of the Apes", "War for the Planet of the Apes"]
}

// old way
// const moviesTitleArray = getMovieTitles()
// const planetOfApes1 = moviesTitleArray[0]
// const planetOfApes2 = moviesTitleArray[1]
// const planetOfApes3 = moviesTitleArray[2]

// new way
const [a, b, c] = getMovieTitles()


/********************** Function Example #2 **********************/
function shareContactInfo({ name, position, phones: { cell }, phones: { work } }) {
    return `${name} is an ${position} who can be 
    reached by cell at ${cell} or by landline at ${work}`
}

const e1 = {
    name: "Michelle",
    position: "Instructor",
    phones: {
        cell: "555-987-6543",
        work: "555-345-6789"
    }
}

