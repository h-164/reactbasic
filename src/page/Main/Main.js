<<<<<<< HEAD
import React,{useState} from "react";

const Main = () => {
  
  const sayHello = () => {
    console.log('하세요');
  }
  const sinDdong = (event) => {
    console.log('hi')
    console.log(event.target.value)
    setSinDong(event.target.value)
  } 
  const [sinDong,setSinDong] = useState("")

  return(
   <div>
      <button onClick={sayHello}>안녕</button>
       <input type="text" onChange={sinDdong} value={sinDong}></input>
   </div>

)
}
=======
import React, { useState } from "react";

const Main = () => {
  const [variant, setVariant] = useState("");

  const changeText = (event) => {
    setVariant(event.target.value);
  };
  return (
    <div>
      <input type="text" value={variant} onChange={changeText} />
      <input type="text" value={variant} onChange={changeText} />
    </div>
  );
};
>>>>>>> 1c0948aa8c7d18cb5987086d2fc500e9121ad601

export default Main;
