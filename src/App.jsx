import { useEffect, useState } from "react";
import "./App.css";

// image rules
import rulesImage from "./assets/images/image-rules.svg";
import clsoeTab from "./assets/images/icon-close.svg";
// Components
import ScoresBoard from "./components/ScoresBoard";
import RockPaperScissors from "./components/RockPaperScissors";



let rockPaperScissorArr = ['rock', 'paper', 'scissor'];
let getRandomNumber = Math.floor(Math.random() * rockPaperScissorArr.length);
let getValue = rockPaperScissorArr[getRandomNumber];
function App() {
  
  const [count, setCount] = useState(Number(sessionStorage.getItem('num'))); // score
  const [rockPaperScissor, setRockPaperScissor] = useState(''); // user pick value
  const [closeTab, setCloseTab] = useState(false); // close rule model
  const [delay, setDelay] = useState(false); // computer pick delay
  const [winOrLose, setWinOrLose] = useState('') // win or lose state
  const [scoreStyleDelay, setScoreStyleDelay] = useState(false) // scoreDelay
  const [winnerAnimation, setWinnerAnimation] = useState(false) // winner animaion style
  const [loserAnimation, setLoserAnimation] = useState(false) // loser animaion style i.e computer wins
  
  sessionStorage.setItem('num', count)
  console.log(count); // count is 0
  
  
  useEffect(()=> {
    // TIED
    if (rockPaperScissor === getValue) {
      // console.log('TIED');
      setLoserAnimation(false)
      setWinnerAnimation(false)
      setWinOrLose('TIED');
      setCount((preValue) => preValue += 0)
    }
    
    // Win
    if (rockPaperScissor === 'paper' && getValue === 'rock') {
      console.log('YOU WIN');
      setWinnerAnimation(true)
      // console.log(winnerAnimation);
      setCount((preValue) => preValue + 1)
      return setWinOrLose('YOU WIN');
    } 
    if (rockPaperScissor === 'rock' && getValue === 'scissor') {
      console.log('YOU WIN');
      setWinnerAnimation(true)
      setCount((preValue) => preValue + 1)
      setWinOrLose('YOU WIN')
    } 
    if (rockPaperScissor === 'scissor' && getValue === 'paper') {
      console.log('YOU WIN');
      setWinnerAnimation(true)
      setCount((preValue) => preValue + 1)
      setWinOrLose('YOU WIN')
    }
    
    // lose
    if (rockPaperScissor === 'rock' && getValue === 'paper') {
      console.log('YOU LOSE');
      setLoserAnimation(true)
      setCount((preValue) => preValue - 1)
      setWinOrLose('YOU LOSE')
    }
    if (rockPaperScissor === 'paper' && getValue === ' scissor') {
      setLoserAnimation(true)
      console.log('YOU LOSE');
      setWinOrLose('YOU LOSE')
    }
    if (rockPaperScissor === 'scissor' && getValue === 'rock') {
      console.log('YOU LOSE');
      setLoserAnimation(true)
      setCount((preValue) => preValue - 1)
      setWinOrLose('YOU LOSE')
    }
    if (rockPaperScissor === 'paper' && getValue === 'scissor') {
      console.log('YOU LOSE');
      setLoserAnimation(true)
      setCount((preValue) => preValue - 1)
      setWinOrLose('YOU LOSE')
    }
  }, [rockPaperScissor])
  
  
  // show rule model
  function handleTab() {
    setCloseTab(true);
  }
  
    
  return (
    <>
      <main className="main">
        <ScoresBoard scoreStyleDelay={scoreStyleDelay} storedCount={count} />
        <RockPaperScissors
          loserAnimation={loserAnimation}
          winnerAnimation={winnerAnimation}
          loser
          setScoreStyleDelay={setScoreStyleDelay}
          winOrLose={winOrLose}
          onDelay={delay}
          setDelay={setDelay}
          setRockPaperScissor={setRockPaperScissor}
          propRockPaperScissor={rockPaperScissor}
          propGetComputerPicked={getValue}
        />
      </main>
      {closeTab && <Rules propSetCloseTab={setCloseTab} />}
      <footer className="footer">
        <button onClick={handleTab} className="rulesBtn">
          RULES
        </button>
      </footer>
    </>
  );
}

// Rules Component
function Rules({ propSetCloseTab }) {
  function handleCloseTab() {
    propSetCloseTab(false);
  }
  return (
    <div className="rulesWrapper">
      <div className="rulesContainer">
        <p className="textRules">RULES</p>
        <div className="closeTab">
          <img onClick={handleCloseTab} src={clsoeTab} alt="close Tab" />
        </div>
        <img
          className="rulesImg"
          src={rulesImage}
          alt="rules image for the game"
        />
      </div>
    </div>
  );
}

export default App;