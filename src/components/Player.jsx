import { useRef } from "react";
import { useState } from "react";

export default function Player() {

  let playerName = useRef()

  const [name,setName] = useState("UnKnown Entity")
  const [submitted,setSubmitted] = useState(false)

  // const [finalName,SetFinalName] = useState("Unknown Entity")

  // function handleChange(event){
  //   SetName(event.target.value)
  // }

  function handleSetNameClick(){
    setName(playerName.current.value)
    setSubmitted(() => !submitted)
  }

  function handleEditNameClick(){
    setSubmitted(() => !submitted)
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        {!submitted && <input ref={playerName} type="text" />}
        <button onClick={submitted?handleEditNameClick:handleSetNameClick}>{submitted?"Edit":"Set"} Name</button>
      </p>
    </section>
  );
}
