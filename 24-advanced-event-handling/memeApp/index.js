// This file contains the event delegation approach. I organized the code into their respective
// section (DOM Elements vs Event Listeners). Search for STEP 1, STEP 2, and STEP 3 to find the code 
// we used for this approach. Alternatively, you can find the unaltered code in the previous commit.
// If you need help with that, send me a message

/******************* DOM Elements ******************/
const toggleSwitch = document.querySelector('#toggle-dark-mode')
const memeForm = document.querySelector('#meme-form')
// STEP 1: find common ancestor/parent
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

memeForm.addEventListener('submit', function (event) {
    event.preventDefault() // <<<<< IMPORTANT!

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

// STEP 2: Add event listener
listings.addEventListener('click', function (event) {
    // STEP 3: Add conditional logic to know if the event we
    // care about was clicked
    const postDiv = event.target.closest('div.post')

    if (event.target.matches('.delete-button')) {
        // const postDiv = event.target.closest('div.post')
        postDiv.remove()
    }
    else if (event.target.matches('.likes-button')) {
        // event.target.dataset.buttonType === 'upvote'
        // const postDiv = event.target.closest('div.post')
        const likesDisplay = postDiv.querySelector('p.likes-count')
        const currLikes = parseInt(likesDisplay.textContent)
        likesDisplay.textContent = currLikes + 1
    }
})


/******************* INITIAL RENDER *******************/
postsArray.forEach(function (postObject) {
    renderOnePost(postObject)
})

/************** FLAWED APPROACH **************/

// const allDelBtns = document.querySelectorAll('.delete-button')
// allDelBtns.forEach(function (button) {
//     // console.log(button)
//     button.addEventListener('click', function (event) {
//         const div = event.target.closest('div.post')
//         console.log(div)
//         div.remove()

//     })
// })



/************** EVENT PROPAGATION DEMO **************/

// document.querySelector('.delete-button').addEventListener('click', function(event) {
//     console.log('DELETE CLICKED. ', event)
// })

// document.querySelector('.post').addEventListener('click', function(event) {
//     console.log('POST DIV CLICKED. ', event)
// })

// document.body.addEventListener('click', function(event) {
//     console.log('BODY CLICKED. ', event.target)
// })