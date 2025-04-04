import React from "react";
import paperImg from "../assets/images/icon-paper.svg";

function Paper({
  setRockPaperScissor,
  setDelay,
  setScoreStyleDelay
}) {
  function handlePaper() {
    setTimeout(() => {
      setDelay(true);
    }, 1000);
    setRockPaperScissor("paper");
    setScoreStyleDelay(true);
  }
  return (
    <div
      onClick={handlePaper}
      className={`paper gameTools`}
    >
      <img className={`paperImg`} src={paperImg} alt="paper" />
    </div>
  );
}

export default Paper;
