import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)

 const btnClicked = () => {
  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
 }
  
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App