import { useState } from "react";
//import { eightballAnswers } from "./App";
import "./Eightball.css";

/**Props:
 * -array of eightball answer objects {msg:..., color:...}
 * 
 * State: 
 * -setColor: str color 
 * -setText: str message
 * 
 * App -> Eightball -> render button with answer text and color style
 */

//think of answer as whole instead of separate color and text, once piece of state obj
function Eightball({ eightballAnswers }) {
  // const [answer, setAnswer] = useState({msg: 'Think...', color: 'black})
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Think of a Question");
//TODO: set length of eightballanswer instead of hard code 20
//TODO: randNum move into handleClick
  let randNum = Math.floor(Math.random() * 20);
/**calls */
  function handleClick() {
    let answer = eightballAnswers[randNum];
    setColor(answer.color);
    setText(answer.msg);
    //setAnswer(answer)
  }

  return (
    <button
    //TODO: just "Eightball" for component className
      className="Eightball-btn"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <b>{text}</b>
    </button>
  );
}

export default Eightball;

// defaults: color black and "think of a question"
// need random generator between 0 - 20
// create css circle
// set state to defaults and create variables to change state
// return a rendering of the component
// onClick will change state
