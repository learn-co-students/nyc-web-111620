import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

// 1. do we need state for this feature? if so, what and where?
// yes - in the MainBox
// MenuBox needs that state - determine what child to render
// MenuBar needs that state - in order to change state in the parent, set the active menu
// 2. set up the initial state
// - what is a good initial value? "Profile"
// 3. set up component to render something based on state
// 4. find a way to update state dynamically (based on user interaction)

// inverse data flow!
// 1. define a event handler in the child component
// 2. define a callback function in the parent component
// 3. pass the callback function as a prop to the child
// 4. call the callback in the event handler with whatever data we're sending up

function MainBox() {
  const [selectedItem, setSelectedItem] = useState("Profile");
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  // const detailsToDisplay = <Photos />;
  let detailsToDisplay;
  if (selectedItem === "Profile") {
    detailsToDisplay = <Profile />;
  } else if (selectedItem === "Photos") {
    detailsToDisplay = <Photos />;
  }

  function handleMenuClick(newSelection) {
    setSelectedItem(newSelection);
  }

  return (
    <div>
      <MenuBar selectedItem={selectedItem} onMenuClick={handleMenuClick} />
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
