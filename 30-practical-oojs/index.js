function globalIntroduce() {
    // console.log(this)
    return `Hi! I'm ${this.firstName}`
}

const greg = {
    firstName: "Greg",
    lastName: "Dwyer",
    introduce: globalIntroduce
}

const rianna = {
    firstNameBeef: "Rianna",
    lastNamejfdskjfbsd: "Cleary",
    introduce: globalIntroduce
}

const michelle = {
    firstName: "Michelle",
    familyName: "Rios",
    introduce: globalIntroduce
}

const ian = {
    firstName: "Ian",
    introduce: globalIntroduce
}

// console.log(globalIntroduce()) // "this" will be window object in globalIntroduce function

// console.log(greg.introduce())
// console.log(rianna.introduce())
// console.log(michelle.introduce())




// console.log(michelle.introduce)
// console.log(greg.introduce)

// TRUE or FALSE?
// console.log(michelle.introduce() === greg.introduce())


// TRUE or FALSE?
// console.log(michelle.introduce === greg.introduce)