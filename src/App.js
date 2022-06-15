import React from "react";
import { useSelector } from "react-redux";

import { Login } from "./features/login/Login";
import { MainPage } from "./pages/mainPage/MainPage";

import { loginState } from "./features/login/loginSlice";

import "./App.css";

function App() {
  const loggedIn = useSelector(loginState);

  if (window.ethereum) {
    console.log("METAMASK");
  } else {
    alert("install metamask extension!!");
  }

  return window.ethereum ? (
    <div className="App">{loggedIn ? <MainPage /> : <Login />}</div>
  ) : (
    <div>Install Metamask</div>
  );
}

export default App;
