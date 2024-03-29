import React from "react";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Main/Header.js";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = loginState;

  const loginHandler = (event) => {
    const { name, value } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };

  const loginButtonClick = () => {
    const body = {
      login_id: loginState.email,
      login_pw: loginState.password,
    };
    try {
      const response = axios.post(
        "http://test-env.eba-babq7paf.us-east-1.elasticbeanstalk.com/user/login",
        body
      );
      console.log(response);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Stack height="100%">
      <Header />
      <Stack flexDirection="row" height="5000px" bgcolor="black">
        <Stack bgcolor="black" style={{ width: "80%", paddingBottom: "5%" }}>
          <Stack flexDirection="row" alignItems="center">
            <Stack
              width="600px"
              height="330px"
              marginTop="15%"
              marginLeft="8%"
              backgroundColor="white"
            />
            <Stack width="350px" margin="15% 5% 0 5%" color="white">
              저희 The glog는 폴더별로 나눠서 파일을 관리할 수 있습니다
            </Stack>
          </Stack>
          <Stack flexDirection="row" alignItems="center">
            <Stack width="350px" margin="15% 5% 0 5%" color="white">
              저희 The glog는 폴더별로 나눠서 파일을 관리할 수 있습니다
            </Stack>
            <Stack
              width="600px"
              height="330px"
              marginTop="15%"
              marginLeft="5%"
              backgroundColor="white"
            />
          </Stack>
          <Stack flexDirection="row" alignItems="center">
            <Stack
              width="600px"
              height="330px"
              marginTop="15%"
              marginLeft="8%"
              backgroundColor="white"
            />
            <Stack width="350px" margin="15% 5% 0 5%" color="white">
              저희 The glog는 폴더별로 나눠서 파일을 관리할 수 있습니다
            </Stack>
          </Stack>
          <Stack flexDirection="row" alignItems="center">
            <Stack width="350px" margin="15% 5% 0 5%" color="white">
              저희 The glog는 폴더별로 나눠서 파일을 관리할 수 있습니다
            </Stack>
            <Stack
              width="600px"
              height="330px"
              marginTop="15%"
              marginLeft="8%"
              backgroundColor="white"
            />
          </Stack>
        </Stack>
        <Stack
          style={{
            width: "20%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            right: 0,
          }}
        >
          <Stack width="80%" style={{ alignItems: "center" }}>
            <Stack
              fontWeight="bold"
              fontSize="20px"
              color="#ECD8A4"
              marginBottom="30px"
            >
              Login
            </Stack>
            <input
              placeholder="Email"
              onChange={loginHandler}
              name="email"
              value={email}
              style={{
                color: "#ffffff",
                width: "80%",
                outline: "transparent",
                backgroundColor: "transparent",
                border: "transparent",
                borderBottom: "1px solid #ffffff",
                marginBottom: "25px",
              }}
            />
            <input
              placeholder="Password"
              onChange={loginHandler}
              type="password"
              name="password"
              value={password}
              style={{
                color: "#ffffff",
                marginBottom: "25px",
                outline: "transparent",
                width: "80%",
                backgroundColor: "transparent",
                border: "transparent",
                borderBottom: "1px solid #ffffff",
              }}
            />
            <Button
              onClick={loginButtonClick}
              variant="outlined"
              sx={{
                width: "80%",
                "&.MuiButton-root": {
                  border: "1px solid #ECD8A4",
                  color: "#ECD8A4",
                },
              }}
            >
              Login
            </Button>
          </Stack>

          <Stack
            onClick={() => navigate("/register")}
            color="#ECD8A4"
            fontSize="11px"
            marginTop="10px"
            marginLeft="8%"
            sx={{ ":hover": { color: "#FFC222" }, cursor: "pointer" }}
          >
            Register
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
