import { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
import "./App.css";

function App() {
  return(
  <>
    <h1>Abhay</h1>
    <Login />
    <Profile />
  </>
  )
}

export default App;
