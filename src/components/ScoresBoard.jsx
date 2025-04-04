import React from 'react'
import '../styles/ScoresBoard.css'
// image
import logo from '../assets/images/logo.svg'

function ScoresBoard({storedCount, scoreStyleDelay}) {

  return (
    <div className='scoreBoard'>
        <img className='scoreBoardLogo' src={logo} alt="rock paper scissors" />
        <div className="scoresContainer">
            <h4 className='scoreParagraph'>SCORE</h4>
            <h1 className={`scores ${scoreStyleDelay ? 'scoreStyleDelay' : ''}`}>{storedCount}</h1>
        </div>
    </div>
  )
}

export default ScoresBoard