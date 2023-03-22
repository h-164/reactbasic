<<<<<<< HEAD
import React,{useState} from 'react'

function Resister() {

  const [userName, setUserName] = useState("");

  const changeText1 = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const [userMail, setUserMail] = useState("");

  const changeText2 = (e) => {
    console.log(e.target.value);
    setUserMail(e.target.value);
  };

  const [userPassword, setUserPassword] = useState("");

  const changeText3 = (e) => {
    console.log(e.target.value);
    setUserPassword(e.target.value);
  };

  const [passVeri, setPassVeri] = useState("");

  const changeText4 = (e) => {
    console.log(e.target.value);
    setPassVeri(e.target.value);
  };

  return (
    <div style={{width: "100%", height: "100%", margin : "0px"}}>
    <div style={{backgroundColor: "rgb(33, 41, 71)", width: "100%", height: "5vh", display:"flex", justifyContent: "end"}}>
        <div style={{height: "5vh"}}>
             <button style={{height: "100%", backgroundColor: "transparent"}}>
            로그인</button>
            <button style={{backgroundColor: "rgb(33, 35, 43)", height: "100%", color: "white"}}>
            회원가입</button>
            </div>
    </div>
    <div style={{backgroundColor: "rgb(48, 51, 73)", width: "100%", height: "95vh", display:"flex", justifyContent: "center"}}>
        <div style={{height: "minContent", width: "minContent", marginTop: "100px"}}>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>사용자 이름
            </div>
            <input type="text" name="st_id1" placeholder="예)최탐김" onChange={changeText1} value={userName}
              style={{width: "300px", height: "25px", borderRadius: "5px"}}/>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>이메일
            </div>  
            <input type="text" name="st_id2" placeholder="talmkc11@naver.com" onChange={changeText2} value={userMail}
              style={{width: "300px", height: "25px"}}/>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>패스워드
            </div>
            <input type="password" name="st_id3" placeholder="비밀번호를 6자리 이상 입력하세요." onChange={changeText3} value={userPassword}
              style={{width: "300px", height: "25px"}}/>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>패스워드 확인
            </div>
            <input type="password" name="st_id3" placeholder="비밀번호를 한 번 더 입력하세요."  onChange={changeText4} value={passVeri}
            style={{ width: "300px", height: "25px"}}/>
            <div style={{width:"300px", fontSize: "small"}}>
            <br></br>
            </div>
            <button style={{backgroundColor: "white", width: "50%", height: "35px"}}>회원가입
            </button>
            <button style={{backgroundColor: "white", width: "50%", height: "35px"}}>취소
            </button>
=======
import React from "react";

function Resister() {
  const suyeon = 3;
  let chaeyeon = 4;

  const sum = suyeon + chaeyeon;

  const clickHandler = () => {
    console.log(sum);
  };

  return (
    <div
      onClick={clickHandler}
      style={{ width: "100%", height: "100%", margin: "0px" }}>
      <div
        style={{
          backgroundColor: "rgb(33, 41, 71)",
          width: "100%",
          height: "5vh",
          display: "flex",
          justifyContent: "end",
        }}>
        <div style={{ height: "5vh" }}>
          <button style={{ height: "100%", backgroundColor: "transparent" }}>
            로그인
          </button>
          <button
            style={{
              backgroundColor: "rgb(33, 35, 43)",
              height: "100%",
              color: "white",
            }}>
            회원가입
          </button>
>>>>>>> 1c0948aa8c7d18cb5987086d2fc500e9121ad601
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(48, 51, 73)",
          width: "100%",
          height: "95vh",
          display: "flex",
          justifyContent: "center",
        }}>
        <div
          style={{
            height: "minContent",
            width: "minContent",
            marginTop: "100px",
          }}>
          <div style={{ color: "white", width: "300px", fontSize: "small" }}>
            사용자 이름
          </div>
          <input
            type="text"
            name="st_id1"
            placeholder="예)최탐김"
            style={{
              width: "300px",
              height: "25px",
              borderRadius: "5px",
              border: "5px double red",
            }}
          />
          <div style={{ color: "white", width: "300px", fontSize: "small" }}>
            이메일
          </div>
          <input
            type="text"
            name="st_id2"
            placeholder="talmkc11@naver.com"
            style={{ width: "300px", height: "25px", border: "5px double red" }}
          />
          <div style={{ color: "white", width: "300px", fontSize: "small" }}>
            패스워드
          </div>
          <input
            type="password"
            name="st_id3"
            placeholder="비밀번호를 6자리 이상 입력하세요."
            style={{ width: "300px", height: "25px", border: "5px double red" }}
          />
          <div style={{ color: "white", width: "300px", fontSize: "small" }}>
            패스워드 확인
          </div>
          <input
            type="password"
            name="st_id3"
            placeholder="비밀번호를 한 번 더 입력하세요."
            style={{ width: "300px", height: "25px", border: "5px double red" }}
          />
          <button
            style={{ backgroundColor: "white", width: "49%", height: "40px" }}>
            회원가입
          </button>
          <button
            style={{ backgroundColor: "white", width: "49%", height: "40px" }}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resister;
