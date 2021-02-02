import React, { useState } from "react";

// find button
// addEventListener("click", callback)

// keep track of the number of likes in a variable
// increment it
// find the h2 element
// update its textContent

function ClickCounter() {
  // let likes = 0;
  // useState(initialValue)

  const [likes, setLikes] = useState(0);
  const [hideLikes, setHideLikes] = useState(true);

  console.log(likes);
  console.log(setLikes);

  function handleClick(event) {
    // likes++;
    // const h2 = event.target.closest("div").querySelector("h2");
    // h2.textContent = `There have been ${likes} clicks`;
    const newLikes = likes + 1;
    setLikes(newLikes);

    // setLikes((currentLikes) => {
    //   return currentLikes + 1
    // })
    // likes will be updated
    // our component (and its children) will RE-render

    // console.log(event);
    // console.log("u clicked me lol");
    // console.log("u clicked me lol");
  }

  return (
    <div style={{ textAlign: "center" }}>
      {hideLikes ? null : <h2>There have been {likes} clicks</h2>}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;
