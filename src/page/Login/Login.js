import React,{useState} from "react";

const Login = () => {

  const [sayHi, setSayHi] = useState("");

  const sayHello = () => {
    console.log('하세요');
  };

  const changeText = (e) => {
    console.log('hi');
    console.log(e.target.value);
    setSayHi(e.target.value);
  };

  return (
    <div>
      <button onClick={sayHello}>안녕</button>
      <input type="text" value={sayHi} onChange={changeText}></input>
    </div>
  );
};

export default Login;
