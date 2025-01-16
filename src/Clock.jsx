import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <div className="clock">
      {time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`}:
      {time.getMinutes() < 10
        ? `0${time.getMinutes()}`
        : `${time.getMinutes()}`}
      :
      {time.getSeconds() < 10
        ? `0${time.getSeconds()}`
        : `${time.getSeconds()}`}{" "}
      PM
    </div>
  );
}
