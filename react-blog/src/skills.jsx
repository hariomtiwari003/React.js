

import { useState } from "react";
function Skills() {
    const [skills, setSkills]=useState([]);
    

const handleSkills = (event) => {
  console.log(event.target.value, event.target.checked);

  if (event.target.checked) {
    setSkills([...skills, event.target.value]);
  } else {
    setSkills([
      ...skills.filter((item) => item != event.target.value)
    ]);
  }
};
  return (
    <div>
      <h3>Select Your Skills</h3>

      <input type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
        <br />
        <br />
      <input type="checkbox" id="js" value="JS" />
      <label htmlFor="js">JS</label>
        <br />
        <br />
      <input type="checkbox" id="node" value="node" />
      <label htmlFor="node">Node</label>
        <br />
        <br />
      <input type="checkbox" id="c++" value="c++" />
      <label htmlFor="c++">c++</label>
    </div>
     
  );
}

export default Skills;