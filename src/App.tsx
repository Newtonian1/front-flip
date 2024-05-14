import './App.css'

function App() {
  return (
    <>
      <h1 className="title">Front Flip</h1>
      <p className="sub-title">A simple site for RLCS fans</p>
      <div className="content">
        <a href="/events" className="nav-button-container"><button className="nav-button">RLCS Events</button></a>
        <a href="/standings" className="nav-button-container"><button className="nav-button">RLCS Standings</button></a>
      </div>
    </>
  )
}

export default App
