import { useState } from "react";
import Filter from "./Filter";
import HogForm from "./HogForm";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  const [showGreased, setShowGreased] = useState(true);
  const [sortBy, setSortBy] = useState("weight");
  const [hogState, setHogState] = useState(hogs);

  function handleAddHog(newHog) {
    setHogState([newHog, ...hogState]);
  }

  // true - show only the greazy hogs
  // false - show all the hogs
  // assembly line!

  // filter: [{},{},{}] => [{},{}]
  // sort: [{name: "Piggy"},{name:"Babe"}] =>  [{name: "Babe"},{name:"Piggy"}]
  // [{},{}] => [<HogTile />]
  const tiles = hogState
    .filter((hog) => {
      if (showGreased) {
        return hog.greased;
      } else {
        return true;
      }
    })
    .sort((hogA, hogB) => {
      if (sortBy === "name") {
        // strings!
        return hogA.name.localeCompare(hogB.name);
      } else if (sortBy === "weight") {
        // numbers!
        return hogA.weight - hogB.weight;
      }
    })
    .map((hog) => <HogTile key={hog.name} hog={hog} />);

  return (
    <div>
      <h1>HogList</h1>
      <HogForm onAddHog={handleAddHog} />
      <Filter
        showGreased={showGreased}
        setShowGreased={setShowGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {tiles}
    </div>
  );
}

export default HogList;
