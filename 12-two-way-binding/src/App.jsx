import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("ankit")


const submitHandler = (e)=>{
  e.preventDefault()
  console.log('Form Submitted');
}
  

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name'
        value={title}
         onChange={(e) =>{
          console.log(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App