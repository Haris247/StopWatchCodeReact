import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, isRunning] = useState(false);
  let intervalId;
  const start = () => {
    isRunning((prev) => !prev);
    clearInterval(intervalId);
  };
  const reset = () => {
    isRunning((prev) => !prev);
    clearInterval(intervalId);
    setTime(0);
  };
  const formatTime = (time) => {
    const hours = Math.floor(time / 36000);
    const minutes = Math.floor((time % 36000) / 60);
    const seconds = Math.floor(time % 60);

    const hoursInString = String(hours).padStart(2, "0");
    const minutesInString = String(minutes).padStart(2, "0");
    const secondsInString = String(seconds).padStart(2, "0");

    return `${hoursInString}:${minutesInString}:${secondsInString}`;
  };
  useEffect(() => {
    if (running) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running]);
  return (
    <>
      <h1>Stop Watch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={start}>{running ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default App;
