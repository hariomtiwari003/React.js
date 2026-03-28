// function App() {
//   const name = "Hariom Tiwari";
//   let x = 25;
//   let y = 45;
//   function fruit() {
//     return "Apple";
//   }

//   function operation(a, b, op) {
//     if (op == "+") {
//       return a + b;
//     } else if (op == "-") {
//       return a - b;
//     } else {
//       return a * b;
//     }
//   }

//   return (
//     <div>
//       <h1>JSX with Curly Braces</h1>
//       <h1>{name}</h1>
//       <h1>{x + y}</h1>
//       <h1>{fruit()}</h1>
//       <h1>{operation(10 , 25,  "+")}</h1>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";
// import Counter from "./Counter"
// function App() {
//   const [fruit, setFruit] = useState("Apple");

//   const handleFruit = () => {
//     setFruit("Banana");
//   };

//   return (
//     <div>
//       <h1>State in React JS</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change Fruit Name</button>
//       <Counter/>
//     </div>
//   );
// }

// export default App;





// import { useState } from "react";
// function App(){
//   const [display, setDisplay] = useState(false)
//   return (
//     <>
//     <h1>toggle in react js</h1>
//     <button onClick={() => setDisplay(!display)}>Toggle</button>
//     {
//       display ? <h1>Himanshu</h1> : <h1>no user name</h1>
//     }
//     </>
//   )
// }


// export default App;




//   import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       {
//         count == 0 ? <h1>Condition 0</h1> :
//         count == 1 ? <h1>Condition 1</h1> :
//         count == 2 ? <h1>Condition 2</h1> :
//         count == 3 ? <h1>Condition 3</h1> :
//         count == 4 ? <h1>Condition 4</h1> :
//         <h1>Other Condition</h1>
//       }
//     </div>
//   );
// }

// export default App;




// import Wrapper from "./wrapper";

// function App() {
//   return (
//     <div>
//       <h1>Props in React</h1>
//       <Wrapper >
//         <h1>hello everyone</h1>
//         </Wrapper>
        
//          <Wrapper >
//         <h1>hello CODERS!</h1>
//         </Wrapper>
//     </div>
//   );
// }

// export default App;






// -------------------Day 3 ------------------------




// import { useState } from "react";

// function App(){
//   const[val,setval] = useState("");

//   return(
//     <div>
//       <h1>get the value</h1>
//       <input type="text" value={val} onChange={(event)=>setval(event.target.value)} placeholder="enter the text"/>
//       <h1>{val}</h1>
//       <button onClick={() =>setval("")}>Clear Value</button>
//     </div>
//   )
// }
// export default App;


import { useState } from "react";

function App(){
 
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
  return(
    <div>
      <h1>Controller Component</h1>
      <form action="" method="get">
      <input type="text"  value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter the text" />
         <br />
        <br />
        <input type="text" value={password}onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" />
         <br />
        <br />

        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="first email"  />
        <br />
        <br />
        <button>Submit</button>

        <button onClick={()=>{setEmail('');setPassword('') ; setEmail('')}}>Clear</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>

    </div>
  )
}
export default App;

















































