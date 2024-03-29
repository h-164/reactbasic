import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registerform() {
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

  const signUp = () => {
    const body = {
      login_id: userMail,
      login_pw: userPassword,
      nickname: userName,
    };
    try {
      const response = axios.post(
        "http://test-env.eba-babq7paf.us-east-1.elasticbeanstalk.com/user/register",
        body
      );
      navigate("/login");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "rgb(48, 51, 73)",
        width: "100%",
        height: "95vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "minContent",
          width: "minContent",
          marginTop: "100px",
        }}
      >
        <div style={{ color: "white", width: "300px", fontSize: "small" }}>
          사용자 이름
        </div>
        <input
          type="text"
          name="st_id1"
          placeholder="예)최탐김"
          onChange={changeText1}
          value={userName}
          style={{ width: "300px", height: "25px", borderRadius: "5px" }}
        />
        <div style={{ color: "white", width: "300px", fontSize: "small" }}>
          이메일
        </div>
        <input
          type="text"
          name="st_id2"
          placeholder="talmkc11@naver.com"
          onChange={changeText2}
          value={userMail}
          style={{ width: "300px", height: "25px" }}
        />
        <div style={{ color: "white", width: "300px", fontSize: "small" }}>
          패스워드
        </div>
        <input
          type="password"
          name="st_id3"
          placeholder="비밀번호를 6자리 이상 입력하세요."
          onChange={changeText3}
          value={userPassword}
          style={{ width: "300px", height: "25px" }}
        />
        <div style={{ color: "white", width: "300px", fontSize: "small" }}>
          패스워드 확인
        </div>
        <input
          type="password"
          name="st_id3"
          placeholder="비밀번호를 한 번 더 입력하세요."
          onChange={changeText4}
          value={passVeri}
          style={{ width: "300px", height: "25px" }}
        />
        <div style={{ width: "300px", fontSize: "small" }}>
          <br></br>
        </div>
        <button
          onClick={signUp}
          style={{ backgroundColor: "white", width: "100%", height: "35px" }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Registerform;
