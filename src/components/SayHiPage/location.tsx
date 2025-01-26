import { useEffect, useState } from "react";

export default function Location() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  },[]);
  return (
    <div id="contactBottomRight">
      <h3>where i am</h3>
      <p>Dallas, Texas</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
