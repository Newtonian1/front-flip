import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="header">Front Flip</h1>
      <p className="sub-header">A simple site for RLCS fans</p>
      <div className="content">
        <button onClick={() => setCount((count) => count + 1)}>
          Regionals missed by KC: {count}
        </button>
      </div>
    </>
  )
}

export default App
