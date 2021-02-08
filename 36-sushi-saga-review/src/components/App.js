import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiArray) => {
        const updatedSushis = sushiArray.map((sushi) => {
          sushi.eaten = false;
          return sushi;
        });
        setSushis(updatedSushis);
      });
    // .then(setSushis);
  }, []);

  function handleAddMoney(newMoney) {
    setMoney((money) => money + newMoney);
  }

  function handleEatSushi(sushiId, sushiPrice) {
    if (money >= sushiPrice) {
      // [{eaten: false}, {}, {}, {}] => [{eaten: true},{},{},{}]
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === sushiId) {
          return {
            ...sushi,
            eaten: true,
          };
        } else {
          return sushi;
        }
      });
      setSushis(updatedSushis);
      setMoney((money) => money - sushiPrice);
    } else {
      alert("Not enough money");
    }
  }

  // [{},{},{},{}] => [{},{}]
  const eatenSushis = sushis.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table plates={eatenSushis} money={money} onAddMoney={handleAddMoney} />
    </div>
  );
}

export default App;

// CRUD
// Update: map!
// Create: [...]
// Delete: filter!

// function addSushi(newSushi) {
//   const updatedSushis = [...sushis, newSushi]
//   setSushi(updatedSushis)
// }
