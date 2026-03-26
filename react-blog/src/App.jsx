function App(){
alert(sum())
  return (
 <div>
   <h1>First Element</h1>
  <Fruit/>
 </div>
)
}


function Fruit(){
  return(
    <h1>Apple</h1>
  )
}

function sum(){
  return 10+20
}


export default App;