import { useState } from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  const [showGreased, setShowGreased] = useState(true);

  // true - show only the greazy hogs
  // false - show all the hogs
  // assembly line!
  // [{},{},{}] => [{},{}]
  // [{},{}] => [<HogTile />]
  const filteredHogs = hogs.filter((hog) => {
    if (showGreased) {
      return hog.greased;
    } else {
      return true;
    }
  });

  const tiles = filteredHogs.map((hog) => <HogTile key={hog.name} hog={hog} />);

  return (
    <div>
      <h1>HogList</h1>
      <Filter showGreased={showGreased} setShowGreased={setShowGreased} />
      {tiles}
    </div>
  );
}

export default HogList;
