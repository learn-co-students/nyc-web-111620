import React, { useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // TODO: when the component FIRST LOADS,
  // set an interval to run every 1 second (using setInterval)
  // every 1 second, update the time by setting state with new Date()

  return <div>{time.toString()}</div>;
}

export default Clock;
