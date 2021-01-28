/******************* DOM Elements ******************/
const toggleSwitch = document.querySelector('#toggle-dark-mode')
const listings = document.querySelector('#listings')
const url = "http://localhost:3000/posts"


/******************* HELPER FUNCTIONS/EVENT HANDLERS *******************/
function init() {
    fetch(url)
        .then(resposne => resposne.json())
        .then(postsArray => {
            postsArray.forEach(function (postObject) {
                let card = new Card(postObject)
                card.render()
            })
        })
}


/******************* Event Listeners  *******************/

toggleSwitch.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})

/******************* INITIAL RENDER *******************/
init()

