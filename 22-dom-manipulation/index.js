/*********** CRUD with the DOM ***********/
// https://developer.mozilla.org/en-US/
// https://www.w3schools.com/cssref/css_selectors.asp 

// READ
// Get the header programatically
const header = document.querySelector('header')
// Select all of the posts
const allPosts = document.querySelectorAll('.post')

// console.log("header - ", header)
// console.log("allPosts - ", allPosts)


// UPDATE
// Update the first post's description to say "I need more sleep"
// STEP 1: Find the element you're trying to update
// let firstPost = document.querySelector('.post')
let firstPost = allPosts[0]
let h4 = firstPost.querySelector('h4')
h4.textContent = "I need more sleep."

//  Change the title's color to white
const h1 = header.querySelector('.logo')
h1.style.color = "white"

// DELETE
// Remove Raffy's unwarranted comment, ugh 🙄💔
const h2 = document.querySelector('main h2')
h2.remove()

// CREATE
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

// < div class="post" >
//     <div class="image">
//         <img src="pics/bugfix.jpeg">
//     </div>
//     <h4 class="description">Has this ever happened to you?</h4>
// </div>
// add one new funny post


//  Create a post for each object in the postsArray array

// artisinal way
postsArray.forEach(function (postObject) {
    // STEP 1: Create each element
    const newOuterDiv = document.createElement('div')
    const newInnerDiv = document.createElement('div')
    const newImg = document.createElement('img')
    const newH4 = document.createElement('h4')

    // STEP 2: Add attributes to new elements!
    // newOuterDiv.classList.add('post')
    newOuterDiv.className = 'post'
    newOuterDiv.id = "someId"

    newInnerDiv.classList.add('image')
    newImg.src = postObject.memeUrl

    newH4.classList.add('description')
    newH4.textContent = postObject.description

    // STEP 3: Figure out the relationships if any
    newOuterDiv.append(newInnerDiv, newH4)
    newInnerDiv.append(newImg)

    // STEP 4: Slap this on the DOM!
    // where are we slapping?? To which element are we adding it?
    const listings = document.querySelector("#listings")
    listings.append(newOuterDiv)
})


// OTHER WAY: innerHTML
// postsArray.forEach(function (postObject) {
//     // STEP 1: Find where we want to add the new post
//     const listings = document.querySelector('#listings')
//     console.log(postObject)
//     listings.innerHTML +=
//         `<div class="post" >
//             <div class="image">
//                 <img src="${postObject.memeUrl}">
//             </div>
//             <h4 class="description">${postObject.description}</h4>
//         </div>`
// })