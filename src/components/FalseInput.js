import "./FalseInput.css";
import { useState } from "react";

const FalseInput = ({ input }) => {
  let fullDate = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <div className="FalseInput">
      <h1>1. The prop is falsy.</h1>
      <div className="date">{fullDate}</div>
      <div>{currentTime}</div>
    </div>
  );
};

export default FalseInput;
