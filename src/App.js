import { createTheme, ThemeProvider } from "@mui/material";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../src/page/Main/Main.js"
import Login from "../src/page/Login/Login.js"
import Register from "./page/Register/Register.js"
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App