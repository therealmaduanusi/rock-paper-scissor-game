import React from "react";
import "../styles/RockPaperScissors.css";

// components
import Paper from "./Paper";
import Scissor from "./Scissor";
import Rock from "./Rock";

function RockPaperScissors({
  propRockPaperScissor,
  propGetComputerPicked,
  setRockPaperScissor,
  setDelay,
  onDelay,
  winOrLose,
  setScoreStyleDelay,
  winnerAnimation,
  loserAnimation
}) {
  // return clicked value
  function getClickedComponent() {
    if (propRockPaperScissor === "paper") {
      return <Paper />;
    } else if (propRockPaperScissor === "scissor") {
      return <Scissor />;
    } else {
      return <Rock />;
    }
  }

  // return computer random picked value
  function getComputerPickedComponent() {
    if (propGetComputerPicked === "paper") {
      // console.log('paper');
      return <Paper />;
    } else if (propGetComputerPicked === "scissor") {
      // console.log('scissor');
      return <Scissor />;
    } else {
      // console.log('rock');
      return <Rock />;
    }
  }

  return (
    <div className={`rockPaperScissorWrapper`}>
      {propRockPaperScissor ? (
        <div className="pickedContainer">
          <div className="youPickedContainer">
            <p className="valuePicked youPickedText">YOU PICKED</p>
            <div className={`youPicked ${winnerAnimation ? 'winnerAnimation' : ''}`}>{getClickedComponent()}</div>
          </div>
          <div className="winOrLoseContainer">
            {onDelay && (
              <>
                <p className="winOrLose">{winOrLose}</p>
                <a className="linkContainerBtn" href="/">
                  <button className="playAgainBtn">PLAY AGAIN</button>
                </a>
              </>
            )}
          </div>
          <div className="computerPickedContainer">
            <p className="valuePicked housePickedText">THE HOUSE PICKED</p>
            <div
              className={`computerPicked ${
                !onDelay ? "computerPickedDelay" : ""
              } ${loserAnimation ? 'winnerAnimation' : ''}`}
            >
              {onDelay && getComputerPickedComponent()}
            </div>
          </div>
        </div>
      ) : (
        <div className="rockPaperScissorContainer">
          <div className="paperAndScissor">
            <Paper
              winnerAnimation={winnerAnimation}
              setScoreStyleDelay={setScoreStyleDelay}
              setDelay={setDelay}
              setRockPaperScissor={setRockPaperScissor}
              propRockPaperScissor={propRockPaperScissor}
            />
            <Scissor
              winnerAnimation={winnerAnimation}
              setScoreStyleDelay={setScoreStyleDelay}
              setDelay={setDelay}
              setRockPaperScissor={setRockPaperScissor}
              propRockPaperScissor={propRockPaperScissor}
            />
          </div>
          <Rock
            winnerAnimation={winnerAnimation}
            setScoreStyleDelay={setScoreStyleDelay}
            setDelay={setDelay}
            setRockPaperScissor={setRockPaperScissor}
            propRockPaperScissor={propRockPaperScissor}
          />
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
