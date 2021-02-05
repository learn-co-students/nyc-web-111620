import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // TODO: when the component FIRST LOADS,
  // set an interval to run every 1 second (using setInterval)
  // every 1 second, update the time by setting state with new Date()
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("ticking");
      setTime(new Date());
    }, 1000);

    // only do this if you have code running in the background!
    return function () {
      console.log("cleanup");
      clearInterval(timerId);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
