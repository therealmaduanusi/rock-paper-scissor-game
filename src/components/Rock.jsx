import React from "react";
import rockImg from "../assets/images/icon-rock.svg";

function Rock({
  setRockPaperScissor,
  setDelay,
  setScoreStyleDelay
}) {
  function handleRock() {
    setTimeout(() => {
      setDelay(true);
    }, 1000);
    setRockPaperScissor("rock");
    setScoreStyleDelay(true);
  }

  return (
    <div
      onClick={handleRock}
      className={`rock gameTools `}
    >
      <img className={`rockImg`} src={rockImg} alt="rock" />
    </div>
  );
}

export default Rock;
