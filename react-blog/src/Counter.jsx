import {useState} from "react";
const Counter=()=>{
    const [count, setCount] = useState(0)
    const [rcounter, setRCounter] = useState(10)
    return(
        <div>
            <h2>Counter:{count}</h2>
            <h2>Reverse Counter:{rcounter}</h2>
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <button onClick={() => setRCounter(rcounter - 1)}>Update RCounter</button>
        </div>
    )
}

export default Counter; 