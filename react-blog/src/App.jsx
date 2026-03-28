import { useState } from "react";

function App (){
  const[gender,setGender]= useState('female');
  const[city,setCity] = useState("delhi")
  return (
 <div>
  <h1>Handle Radio and Dropdown</h1>
  <h4>Select Gender</h4>
  <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender"
  value="male" checked={gender=="male"} id="male" />
  <label htmlFor="male">Male</label>
  <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" 
  value="female" checked={gender=="female"} id="female" />
  <label htmlFor="female">Female</label>
  <h2>Selected Gender:{gender}</h2>
  <br />
  <br />
  <h4>Select City</h4>

  <select  onChange={(event)=>setCity(event.target.value)} defaultValue={"lucknow"}>
    <option value="noida">Noida</option>
    <option value="lucknow">Lucknow</option>
    <option value="Delhi">Delhi</option>
  </select>

    <h2>Selected City : {city}</h2>

 </div>
  )
}

export default App;