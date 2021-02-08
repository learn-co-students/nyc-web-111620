import React from "react";
import SushiWallet from "./SushiWallet";

function Table({ plates = [], money, onAddMoney }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${money} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <SushiWallet onAddMoney={onAddMoney} />
    </>
  );
}

export default Table;
