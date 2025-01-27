import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Notes</h1>
      {/* The notes title will be displayed here */}
      <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>

      <button> Create notes</button>
      {/* Will be redirected to new link or open a new window to create a note*/}

      {/* This section will show up after clicking the create notes button */}

      <form action="">
        <input type="text" /> <br />
        <input type="rich text" /> <br />
        <input type="button" value="Submit" />
      </form>


    </>
  )
}

export default App
