class Card {

    constructor(memeData) {
        this.memeData = memeData

        // option 2 (instead of arrow function syntax)
        // this.handleLikes = this.handleLikes.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
    }

    // option 1: use arrow function syntax for callbacks
    handleLikes = () => {
        console.log(this)
        const likesDisplay = this.card.querySelector('p.likes-count')
        const currLikes = parseInt(likesDisplay.textContent)

        fetch(`${url}/${this.memeData.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ likes: currLikes + 1 })
        })
            .then(response => response.json())
            .then(updatedPost => {
                likesDisplay.textContent = updatedPost.likes
            })
    }

    handleDelete = () => {
        fetch(`${url}/${this.memeData.id}`, {
            method: "DELETE"
        })
        this.card.remove()
    }

    render() {
        console.log(this)
        const listings = document.querySelector('#listings')

        this.card = document.createElement('div')

        this.card.dataset.id = this.memeData.id
        this.card.classList.add('post')
        this.card.innerHTML = `
                <div class="image">
                    <img src="${this.memeData.memeUrl}">
                        <button class="delete-button">X</button>
                </div>
                <h4 class="description">${this.memeData.description}!</h4>
                <p class="likes-count">${this.memeData.likes}</p>
                <button class="likes-button" data-button-type="upvote">👍</button>`

        const likesButton = this.card.querySelector('.likes-button')
        const deleteButton = this.card.querySelector('.delete-button')

        likesButton.addEventListener('click', this.handleLikes)
        deleteButton.addEventListener('click', this.handleDelete)
        listings.append(this.card)
    }
}
