import React, { useState, useEffect, useRef } from "react";
const Counter = () => {
  const [seconds, setSeconds] = useState(10);
  const [done, setDone] = useState(false);
  const foo = useRef();

  useEffect(() => {
    function tick() {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
    foo.current = setInterval(() => tick(), 1000);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(foo.current);
      setDone(true);
    }
  }, [seconds]);

  return (
    <div>
      {seconds}
      {done && <p>Count down is done.</p>}
    </div>
  );
};

export default Counter;
