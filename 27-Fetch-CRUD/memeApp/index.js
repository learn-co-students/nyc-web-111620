/******************* DOM Elements ******************/
const toggleSwitch = document.querySelector('#toggle-dark-mode')
const memeForm = document.querySelector('#meme-form')
const listings = document.querySelector('#listings')


/******************* HELPER FUNCTIONS/EVENT HANDLERS *******************/
function renderOnePost(postObject) {
    const listings = document.querySelector('#listings')

    const outerDiv = document.createElement('div')
    outerDiv.classList.add('post')
    outerDiv.innerHTML = `
                <div class="image">
                    <img src="${postObject.memeUrl}">
                        <button class="delete-button">X</button>
                </div>
                <h4 class="description">${postObject.description}!</h4>
                <p class="likes-count">${postObject.likes}</p>
                <button class="likes-button" data-button-type="upvote">👍</button>`

    listings.append(outerDiv)
}


/******************* Event Listeners  *******************/

toggleSwitch.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})

// CREATES A NEW MEME POST WITH USER INPUT FROM A FORM
memeForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const memeUrlInput = event.target.url.value
    const descriptionInput = event.target.description.value

    const post = {
        memeUrl: memeUrlInput,
        description: descriptionInput,
        likes: 0
    }

    event.target.reset()
    renderOnePost(post)
})

// DELETES POST & UPDATES LIKES COUNT
listings.addEventListener('click', function (event) {
    const postDiv = event.target.closest('div.post')

    if (event.target.matches('.delete-button')) {
        postDiv.remove()
    }
    else if (event.target.matches('.likes-button')) {
        const likesDisplay = postDiv.querySelector('p.likes-count')
        const currLikes = parseInt(likesDisplay.textContent)
        likesDisplay.textContent = currLikes + 1
    }
})


/******************* INITIAL RENDER *******************/
// postsArray is an array of object that comes from data.js
postsArray.forEach(function (postObject) {
    renderOnePost(postObject)
})