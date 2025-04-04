import React from "react";
import scissorImg from "../assets/images/icon-scissors.svg";

function Scissor({
  setRockPaperScissor,
  setDelay,
  setScoreStyleDelay
}) {
  function handleScissor() {
    setTimeout(() => {
      setDelay(true);
    }, 1000);
    setRockPaperScissor("scissor");
    setScoreStyleDelay(true);
  }
  return (
    <div
      onClick={handleScissor}
      className={`scissor gameTools`}
    >
      <img className={`scissorImg`} src={scissorImg} alt="scissor" />
    </div>
  );
}

export default Scissor;
