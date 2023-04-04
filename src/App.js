import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../src/page/Main/Main.js"
import Login from "../src/page/Login/Login.js"
import Register from "./page/Register/Register.js"
import Mainn from "../src/page/Mainn/Mainn"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/mainn" element={<Mainn />}/>
      </Routes>
    </Router>
  );
}

export default App