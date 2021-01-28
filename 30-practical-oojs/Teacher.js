class Person {

    nap() {
        console.log('...zzzzzzzz 😴')
        return 1
    }
}


class Teacher extends Person {

    static all = []

    constructor(firstName, lastName) {
        super()
        this.firstName = firstName
        this.lastName = lastName

        Teacher.all.push(this)
    }

    introduce() {
        return `Hi! I'm ${this.firstName} ${this.lastName}`
    }

    teach() {
        return `I'm teaching`
    }

    nap() {
        console.log("this one")
    }

    static listAllNames() {
        return Teacher.all.map(teacher => {
            return teacher.firstName
        })
    }

}

let raffy = new Teacher("raffy", "adams")
let kent = new Teacher("Kent C.", "Strait")