
let postsArray = [
    {
        memeUrl: 'pics/dino.jpeg',
        description: 'Ahhh!!!'

    },
    {
        memeUrl: 'pics/elvish.jpeg',
        description: 'Hmm 🤔'

    },
    {
        memeUrl: 'pics/space.jpeg',
        description: 'Have standards people, standards!!!'

    },
    {
        memeUrl: 'pics/restaurant.jpg',
        description: 'Let\'s wine & dine!'

    }
]

/**************** EVENT HANDLING DELIVERABLES ****************/


postsArray.forEach(function (postObject) {
    renderOnePost(postObject)
})

// helper function in charge of creating the HTML for one meme post and slapping it on the DOM
function renderOnePost(postObject) {
    // STEP 1: Find where we want to add the new post
    const listings = document.querySelector('#listings')

    // STEP 2: Create the outermost element artisanally
    const outerDiv = document.createElement('div')
    outerDiv.classList.add('post')
    // STEP 3: Add the outermost element's children and their descendents using innerHTML
    outerDiv.innerHTML = `<div class="image">
                            <img src="${postObject.memeUrl}">
                        </div>
                        <h4 class="description">${postObject.description}</h4>`
    // STEP 4: Slap it on the DOM
    listings.append(outerDiv)
}


/**** DELIVERABLE 1 ****/

// 1. What elements do we want to listen for events on? (button, form, checkbox, etc)
const toggleSwitch = document.querySelector('#toggle-dark-mode')
// 2. What kind of event are we listening for? (click, submit, scroll, etc)
toggleSwitch.addEventListener('click', function () {
    // 3. What do we want to happen? (what function do we want to run)
    // if (document.body.matches('.dark-mode')) {
    //     // remove the dark mode class
    //     document.body.classList.remove('dark-mode')
    // }
    // else {
    //     // add the dark mode class
    //     document.body.classList.add('dark-mode')
    // }

    document.body.classList.toggle('dark-mode')
})



/**** DELIVERABLE 2 ****/

const memeForm = document.querySelector('#meme-form')
memeForm.addEventListener('submit', function (event) {
    event.preventDefault() // <<<<< IMPORTANT!

    // STEP 1: Get user input programatically
    // memeForm.querySelector("input[type='text']").value
    // event.target[0].value
    // event.target.url.value
    const memeUrlInput = event.target.url.value
    const descriptionInput = event.target.description.value

    // STEP 2: Using their input, render a new post on the page
    const post = {
        memeUrl: memeUrlInput,
        description: descriptionInput
    }

    // DOM MANIPULATION TIME
    renderOnePost(post)

    // STEP 3: If you want, clear out the form fields
    event.target.reset()
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