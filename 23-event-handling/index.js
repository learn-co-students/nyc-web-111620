
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


//  Create a post for each object in the postsArray array
// THIS IS HOW WE WANT EACH POST TO BE STRUCTURED
// < div class="post" >
//     <div class="image">
//         <img src="pics/bugfix.jpeg">
//     </div>
//     <h4 class="description">Has this ever happened to you?</h4>
// </div>



/***************** ARTISANAL APPROACH *****************/
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

    // STEP 3: Figure out the relationships, if any
    newOuterDiv.append(newInnerDiv, newH4)
    newInnerDiv.append(newImg)

    // STEP 4: Slap it on the DOM!
    // Where are we slapping our elements?? To which element are we adding/appending it?
    const listings = document.querySelector("#listings")
    listings.append(newOuterDiv)
})


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
