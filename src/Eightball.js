import { useState } from "react";
import { eightballAnswers } from "./App";


function Eightball({ eigthballAnswers }){

  const [color, setColor] = useState("black");
  const [text, setText] = useState("Think of a Question");

  let randNum = Math.floor(Math.random() * 20);


  function handleClick() {
    let answer = eightballAnswers[randNum];
    setColor(answer.color);
    setText(answer.msg);
  }

  return (
    <button className="Eightball-`${color}" onClick={handleClick}>
      <b>{text}</b>
    </button>
  )


}


export default Eightball;


// defaults: color black and "think of a question"
// need random generator between 0 - 20
// create css circle
// set state to defaults and create variables to change state
// return a rendering of the component
// onClick will change state
