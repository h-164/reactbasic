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

export default Main