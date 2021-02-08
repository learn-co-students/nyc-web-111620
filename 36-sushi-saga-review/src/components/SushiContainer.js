import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [startIndex, setStartIndex] = useState(0);
  // if (typeof sushis === "string") {
  //   return <h1>Error</h1>
  // }

  // when the start index gets to 96, the next should be 0 instead of 100

  function handleMoreClick() {
    setStartIndex((startIndex) => {
      return (startIndex + 4) % 100;
      // if (startIndex === sushis.length - 4) {
      //   return 0;
      // } else {
      //   return startIndex + 4;
      // }
    });
  }

  // assembly line
  // [{},{},{},{},{}] => [{},{},{},{}]
  // [{},{},{},{}] => [<SushiComponent />, <SushiComponent />, <SushiComponent />, <SushiComponent />]
  const sushiItems = sushis.slice(startIndex, startIndex + 4).map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />;
  });

  return (
    <div className="belt">
      {sushiItems}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
