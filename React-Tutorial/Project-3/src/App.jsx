import React, { useState } from 'react'

const App = () => {

  const [num, setfirst] = useState(0)

  function Increase_val() {
    setfirst(num+1)
  }

  function Decrease_val() {
    setfirst(num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase_val}>Increase</button>
      <button onClick={Decrease_val}>Decrease</button>
    </div>
  )
}

export default App
