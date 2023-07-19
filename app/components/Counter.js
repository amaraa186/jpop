import { useState, useEffect } from "react";
import moment from "moment";
import { useMediaQuery } from "react-responsive";

const endDate = moment("2023-07-29 12:00:00");

const Counter = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
        fontSize: isTabletOrMobile ? "28px" : "140px",
        fontFamily: "monospace",
        color: "transparent",
        WebkitTextStrokeWidth: isTabletOrMobile ? 1 : 2,
        WebkitTextStrokeColor: "black",
      }}
    >
      {day}d {hour}h {minute}m {second}s
    </h1>
  );
};

export default Counter;
