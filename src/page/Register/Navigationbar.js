import React from 'react'

function Navigationbar() {
  return (
        <div style={{backgroundColor: "rgb(33, 41, 71)", width: "100%", height: "5vh", display:"flex", justifyContent: "end"}}>
        <div style={{height: "5vh"}}>
         <button style={{height: "100%", backgroundColor: "transparent"}}>
        로그인</button>
        <button style={{backgroundColor: "rgb(33, 35, 43)", height: "100%", color: "white"}}>
        회원가입</button>
        </div>
</div>
  )
}

export default Navigationbar