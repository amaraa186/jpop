import { useState, useEffect } from "react";
import { Box, Heading } from "gestalt";
import moment from "moment";

const endDate = moment("2023-07-29 12:00:00");

const Counter = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = moment.duration(endDate.diff(moment()));
      setDay(duration.days());
      setHour(duration.hours());
      setMinute(duration.minutes());
      setSecond(duration.seconds());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1
      style={{
        fontSize: "144px",
        fontFamily: "monospace",
        color: "transparent",
        WebkitTextStrokeWidth: 2,
        WebkitTextStrokeColor: "black",
      }}
    >
      {day}d {hour}h {minute}m {second}s
    </h1>
  );
};

export default Counter;
