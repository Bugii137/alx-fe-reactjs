import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'  // ✅ Correct import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  {/* ✅ Opening fragment tag */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* ✅ New Component Added */}
      <WelcomeMessage />

      <h1>Vite + React</h1>
      <div className="card">
        <h4>Revolution</h4>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>  // ✅ Closing fragment tag
  )
}

export default App