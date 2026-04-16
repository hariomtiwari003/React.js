import React from 'react'

const App = () => {
  // function btnClicked(){
  //   console.log('button is clicked')
  // }
  function inputchanging() {
    console.log('user is Typing');
  }
  
  return (
    <div>
      {/* <button onClick={btnClicked}>Click here</button>
      <button onClick={btnClicked}>explore this</button> */}
      <input  onChange={inputchanging} type="text" paleceholder='Enter your name' />

    </div>
  )
}

export default App