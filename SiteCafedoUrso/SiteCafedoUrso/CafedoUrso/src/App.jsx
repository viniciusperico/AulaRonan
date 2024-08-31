import React, { } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal/Principal";
import LoginAdmin from "./components/Administrador/LoginAdmin"
import Login from "./components/Administrador/Login";

function App() {

  return(
  <>

    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/administrador" element={<LoginAdmin />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>









  </>



  )
}

export default App;
