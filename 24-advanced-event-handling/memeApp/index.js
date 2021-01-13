/******************* DOM Elements ******************/
const toggleSwitch = document.querySelector('#toggle-dark-mode')
const memeForm = document.querySelector('#meme-form')


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
        description: descriptionInput
    }

    event.target.reset()
    renderOnePost(post)
})


/******************* INITIAL RENDER *******************/
postsArray.forEach(function (postObject) {
    renderOnePost(postObject)
})



















/**************** FROM DOM LECTURE ****************/

//  Create a post for each object in the postsArray array
// THIS IS HOW WE WANT EACH POST TO BE STRUCTURED
// < div class="post" >
//     <div class="image">
//         <img src="pics/bugfix.jpeg">
//     </div>
//     <h4 class="description">Has this ever happened to you?</h4>
// </div>



/***************** ARTISANAL APPROACH *****************/
// postsArray.forEach(function (postObject) {
//     // STEP 1: Create each element
//     const newOuterDiv = document.createElement('div')
//     const newInnerDiv = document.createElement('div')
//     const newImg = document.createElement('img')
//     const newH4 = document.createElement('h4')

//     // STEP 2: Add attributes to new elements!
//     // newOuterDiv.classList.add('post')
//     newOuterDiv.className = 'post'
//     newOuterDiv.id = "someId"

//     newInnerDiv.classList.add('image')
//     newImg.src = postObject.memeUrl

//     newH4.classList.add('description')
//     newH4.textContent = postObject.description

//     // STEP 3: Figure out the relationships, if any
//     newOuterDiv.append(newInnerDiv, newH4)
//     newInnerDiv.append(newImg)

//     // STEP 4: Slap it on the DOM!
//     // Where are we slapping our elements?? To which element are we adding/appending it?
//     const listings = document.querySelector("#listings")
//     listings.append(newOuterDiv)
// })


/***************** INNERHTML APPROACH *****************/
// postsArray.forEach(function (postObject) {
//     // STEP 1: Find where we want to add the new post
//     const listings = document.querySelector('#listings')
//    // STEP 2: update the innerHTML
//     listings.innerHTML +=
//         `<div class="post" >
//             <div class="image">
//                 <img src="${postObject.memeUrl}">
//             </div>
//             <h4 class="description">${postObject.description}</h4>
//         </div>`
// })

/***************** INNERHTML/ARTISINAL COMBO APPROACH *****************/
// postsArray.forEach(function (postObject) {
//     // STEP 1: Find where we want to add the new post
//     const listings = document.querySelector('#listings')

//     // STEP 2: create the outermost element
//     const outerDiv = document.createElement('div')
//     outerDiv.classList.add('post')

//     outerDiv.innerHTML = `<div class="image">
//                             <img src="${postObject.memeUrl}">
//                         </div>
//                         <h4 class="description">${postObject.description}</h4>`

//     listings.append(outerDiv)
// })