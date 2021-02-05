import React, { useEffect, useState } from "react";
import Clock from "./Clock";
// App() -> return JSX -> turn JSX into DOM -> useEffect callbacks

// just 1 arg: run every time our component rerenders
// 2nd arg: dependencies array
// - [] === only run the effect the first time our component renders by a parent
// - [variable1, variable2] === run the effect any time those variables change between renders

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showClock, setShowClock] = useState(true);

  const title = `${count} ${text}`;

  useEffect(() => {
    console.log("useEffect callback");
    document.title = title;
  }, [title]);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Input says: {text}</p>
      <button onClick={() => setShowClock(!showClock)}>Hide Clock</button>
      {showClock ? <Clock /> : null}
    </div>
  );
}

export default App;
