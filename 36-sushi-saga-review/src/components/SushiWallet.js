import { useState } from "react";

function SushiWallet({ onAddMoney }) {
  const [value, setValue] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    onAddMoney(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button type="submit">Add $</button>
    </form>
  );
}

export default SushiWallet;
