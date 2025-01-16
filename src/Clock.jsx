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
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} PM
    </div>
  );
}
