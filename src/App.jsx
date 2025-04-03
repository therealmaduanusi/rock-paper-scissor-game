import { useEffect, useState } from 'react'
import './App.css'

// image rules
import rulesImage from './assets/images/image-rules.svg'
import clsoeTab from './assets/images/icon-close.svg'
// Components
import ScoresBoard from './components/ScoresBoard'

function App() {
  const [count, setCount] = useState(0)
  const [closeTab, setCloseTab] = useState(false)

  function handleTab() {
    setCloseTab(true)
  }

  return (
    <>
    <main className='main'>
      <ScoresBoard />
    </main>
      {closeTab && <Rules propSetCloseTab={setCloseTab} />}
    <footer className='footer'>
      <button onClick={handleTab} className='rulesBtn'>RULES</button>
    </footer>
    </>
  )
}

function Rules({propSetCloseTab}) {
  function handleCloseTab() {
    propSetCloseTab(false)
  }
  return (
    <div className="rulesWrapper">
      <div className="rulesContainer">
        <p className='textRules'>RULES</p>
        <div className='closeTab'>
          <img onClick={handleCloseTab} src={clsoeTab} alt="close Tab" />
        </div>
        <img className='rulesImg' src={rulesImage} alt="rules image for the game" />
      </div>
    </div>
  )
}

export default App
