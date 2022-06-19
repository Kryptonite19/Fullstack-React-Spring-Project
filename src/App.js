import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import Home from "./pages/Home/Home";
import { Navbar  } from "./components";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <Router>
        <GlobalStyle/>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
